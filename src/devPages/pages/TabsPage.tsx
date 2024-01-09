import { CrateTabs } from '../../components';
import Section from '../Section/Section';
import getTabItems from '../utils/tabItems';

export default function NoDataViewsPage() {
  return (
    <Section title="Tabs">
      <CrateTabs defaultActiveKey="tab1" animated={false} items={getTabItems()} />
    </Section>
  );
}
