import { Loader } from '../../components';
import Section from '../Section/Section';

export default function LoadersPage() {
  return (
    <Section title="Loaders">
      <Loader color={Loader.colors.PRIMARY} size={Loader.sizes.LARGE} />
      <Loader />
      <Loader color={Loader.colors.PRIMARY} size={Loader.sizes.SMALL} />
    </Section>
  );
}
