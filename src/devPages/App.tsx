import { Button, Loader, Text } from '../components';
import Section from './Section/Section';

function App() {
  return (
    <div className="w-full flex flex-col justify-center">
      <Section title="Buttons">
        <Button kind={Button.kinds.PRIMARY}>Primary Button</Button>
        <Button kind={Button.kinds.SECONDARY}>Secondary Button</Button>
        <Button kind={Button.kinds.TERTIARY}>Tertiary Button</Button>
        <Button loading>Loading Button</Button>
      </Section>

      <Section title="Loaders">
        <Loader />
      </Section>

      <Section title="Texts">
        <Text>Example Text</Text>
      </Section>
    </div>
  );
}

export default App;
