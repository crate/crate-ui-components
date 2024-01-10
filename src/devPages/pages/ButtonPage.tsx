import { Button } from '../../components';
import Section from '../Section/Section';

export default function ButtonPage() {
  return (
    <Section title="Buttons">
      <Button kind="primary">Primary Button</Button>
      <Button kind="secondary">Secondary Button</Button>
      <Button kind="tertiary">Tertiary Button</Button>
      <Button loading>Loading Button</Button>
    </Section>
  );
}
