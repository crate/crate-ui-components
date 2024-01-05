import { fireEvent, render } from '../../../test/testUtils';
import Button, { ButtonProps } from './Button';

const onClickSpy = jest.fn();

const defaultProps: ButtonProps = {
  onClick: onClickSpy,
  children: 'click me',
};
const setup = (props: Partial<ButtonProps> = {}) => {
  const combinedProps = { ...defaultProps, ...props };

  return render(<Button {...combinedProps} />);
};

describe('The Button component', () => {
  afterEach(() => {
    onClickSpy.mockClear();
  });

  describe('when binding the button to a form', () => {
    it('passes the form property to the form attribute on the button', () => {
      const { getByRole } = setup({ form: 'submit-this-form' });

      expect(getByRole('button').getAttribute('form')).toBe('submit-this-form');
    });
  });

  describe('when passing addtional classes to the form', () => {
    it('passes the class property to the class attribute on the button', () => {
      const { getByRole } = setup({ className: 'additional-classes' });

      expect(getByRole('button')).toHaveClass('additional-classes');
    });
  });

  describe('when clicking the button', () => {
    it('invokes the given click handler', () => {
      const { getByRole } = setup();

      fireEvent.click(getByRole('button'));

      expect(onClickSpy).toHaveBeenCalled();
    });
  });

  describe('when the button is disabled', () => {
    it('does not invoke the given click handler when the button is clicked', () => {
      const { getByRole } = setup({
        disabled: true,
      });

      fireEvent.click(getByRole('button'));

      expect(onClickSpy).not.toHaveBeenCalled();
    });

    it('sets the aria-disabled attribute to true', () => {
      const { getByRole } = setup({
        disabled: true,
      });

      expect(getByRole('button').getAttribute('aria-disabled')).toBe('true');
    });
  });

  describe('when the button is loading', () => {
    it('does not invoke the given click handler when the button is clicked', () => {
      const { getByRole } = setup({
        loading: true,
      });

      fireEvent.click(getByRole('button'));

      expect(onClickSpy).not.toHaveBeenCalled();
    });

    it('sets the aria-busy attribute to true', () => {
      const { getByRole } = setup({
        loading: true,
      });

      expect(getByRole('button').getAttribute('aria-busy')).toBe('true');
    });

    it('sets the aria-disabled attribute to true', () => {
      const { getByRole } = setup({
        loading: true,
      });

      expect(getByRole('button').getAttribute('aria-disabled')).toBe('true');
    });
  });

  describe('when the button is displayed as the ghost variation', () => {
    it('displays the background as transparent', () => {
      const { getByRole } = setup({
        ghost: true,
      });

      expect(getByRole('button')).toHaveClass('bg-transparent');
    });

    it('displays the border as white for primary buttons', () => {
      const { getByRole } = setup({
        ghost: true,
        kind: 'primary',
      });

      expect(getByRole('button')).toHaveClass('border-neutral-100');
    });

    it('displays the border as white on hover for secondary disabled buttons', () => {
      const { getByRole } = setup({
        ghost: true,
        kind: 'secondary',
      });

      expect(getByRole('button')).toHaveClass('hover:border-neutral-100');
    });

    it('displays the border as white for secondary disabled buttons', () => {
      const { getByRole } = setup({
        disabled: true,
        ghost: true,
        kind: 'secondary',
      });

      expect(getByRole('button')).toHaveClass('border-neutral-100');
    });
  });

  describe('when the button is displayed as the warn variation', () => {
    it('displays the background as red for primary buttons', () => {
      const { getByRole } = setup({
        warn: true,
        kind: 'primary',
      });

      expect(getByRole('button')).toHaveClass('bg-red-400');
    });

    it('displays the text as red for primary buttons', () => {
      const { getByRole } = setup({
        warn: true,
        kind: 'secondary',
      });

      expect(getByRole('button')).toHaveClass('text-red-400');
    });
  });
});
