import { render } from '../../../test/testUtils';
import Text, { TextProps } from './Text';

const defaultProps: TextProps = {
  children: 'the Text value',
};

const setup = (props: Partial<TextProps> = {}) => {
  const combinedProps = { ...defaultProps, ...props };

  return render(<Text {...combinedProps} />);
};

describe('The Text component', () => {
  it('displays the text passed as value', () => {
    const { getByText } = setup();

    expect(getByText('the Text value')).toBeInTheDocument();
  });

  it('displays the text as a div element by default', () => {
    const { getByText } = setup({
      children: 'this is a div element',
    });

    expect(getByText('this is a div element').nodeName).toBe('DIV');
  });

  it('supports displaying the text as a P element', () => {
    const { getByText } = setup({
      displayAs: 'p',
      children: 'this is a p element',
    });

    expect(getByText('this is a p element').nodeName).toBe('P');
  });

  it('supports displaying the text as a span element', () => {
    const { getByText } = setup({
      displayAs: 'span',
      children: 'this is a span element',
    });

    expect(getByText('this is a span element').nodeName).toBe('SPAN');
  });

  it('supports displaying the text in a lighter font weight', () => {
    const { getByText } = setup({
      children: 'this is pale text',
      pale: true,
    });

    expect(
      getByText('this is pale text').classList.contains('text-neutral-500'),
    ).toBe(true);
  });

  it('supports truncating the text', () => {
    const { getByText } = setup({
      children: 'this text is truncated',
      truncate: true,
    });

    expect(getByText('this text is truncated').classList.contains('truncate')).toBe(
      true,
    );
  });

  it('adds any additional classes to the existing display classes', () => {
    const { getByText } = setup({
      className: 'foo bar',
      children: 'with custom classes',
    });

    expect(getByText('with custom classes').classList.contains('foo')).toBe(true);
    expect(getByText('with custom classes').classList.contains('bar')).toBe(true);
  });
});
