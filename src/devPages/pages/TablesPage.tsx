import { CrateTable } from '../../components';
import Section from '../Section/Section';
import SectionSubtitle from '../Section/SectionSubtitle';
import getTableData from '../utils/tableData';

export default function TablesPage() {
  return (
    <Section title="Tables" orientation="vertical">
      <SectionSubtitle>Empty Table Example</SectionSubtitle>
      <CrateTable
        dataSource={[]}
        columns={[
          {
            title: 'Property 1',
            key: 'property1',
            dataIndex: 'property1',
          },
          {
            title: 'Property 2',
            key: 'property2',
            dataIndex: 'property2',
          },
        ]}
        rowKey="property1"
        showHeader
      />
      <SectionSubtitle>Table example</SectionSubtitle>
      <CrateTable
        dataSource={getTableData()}
        columns={[
          {
            title: 'Property 1',
            key: 'property1',
            dataIndex: 'property1',
          },
          {
            title: 'Property 2',
            key: 'property2',
            dataIndex: 'property2',
          },
        ]}
        rowKey="property1"
        showHeader
        pagination={{
          defaultPageSize: 5,
        }}
      />
    </Section>
  );
}
