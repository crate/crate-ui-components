import { Button } from '../../components';
import Section from '../Section/Section';

export default function ButtonPage() {
  return (
    <Section title="Buttons">
      <Button kind={Button.kinds.PRIMARY}>Primary Button</Button>
      <Button kind={Button.kinds.SECONDARY}>Secondary Button</Button>
      <Button kind={Button.kinds.TERTIARY}>Tertiary Button</Button>
      <Button loading>Loading Button</Button>
    </Section>
  );
}
