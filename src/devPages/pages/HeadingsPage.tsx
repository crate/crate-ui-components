import { Heading } from '../../components';
import Section from '../Section/Section';

export default function HeadingsPage() {
  return (
    <Section title="Headings" orientation="vertical">
      <Heading level={Heading.levels.h1}>H1 Heading</Heading>
      <Heading level={Heading.levels.h2}>H2 Heading</Heading>
      <Heading level={Heading.levels.h3}>H3 Heading</Heading>
      <Heading level={Heading.levels.h4}>H4 Heading</Heading>
      <Heading level={Heading.levels.h5}>H5 Heading</Heading>
      <Heading level={Heading.levels.h6}>H6 Heading</Heading>
    </Section>
  );
}
