import { useEffect } from 'react';
import { render, screen } from '../../../test/testUtils';
import useMessage from '../useMessage';

function MockErrorComponent() {
  const { showErrorMessage } = useMessage();

  useEffect(() => {
    showErrorMessage('Example error message');
  });

  return null;
}

function MockLoadingComponent() {
  const { showLoadingMessage } = useMessage();

  useEffect(() => {
    showLoadingMessage('Example loading message');
  });

  return null;
}

function MockSuccessComponent() {
  const { showSuccessMessage } = useMessage();

  useEffect(() => {
    showSuccessMessage('Example success message');
  });

  return null;
}

describe('The useMessage hook', () => {
  describe('the showErrorMessage function', () => {
    it('displays the error message', async () => {
      render(<MockErrorComponent />);
      const message = await screen.findByText('Example error message');

      expect(message).toBeInTheDocument();
      expect(message.parentElement).toHaveClass('ant-message-error');
    });
  });

  describe('the showLoadingMessage function', () => {
    it('displays the loading message', async () => {
      render(<MockLoadingComponent />);
      const message = await screen.findByText('Example loading message');

      expect(message).toBeInTheDocument();
      expect(message.parentElement).toHaveClass('ant-message-loading');
    });
  });

  describe('the showSuccessMessage function', () => {
    it('displays the success message', async () => {
      render(<MockSuccessComponent />);
      const message = await screen.findByText('Example success message');

      expect(message).toBeInTheDocument();
      expect(message.parentElement).toHaveClass('ant-message-success');
    });
  });
});
