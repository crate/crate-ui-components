import { Spin, Table } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useIntl } from 'react-intl';
import NoDataView from '../NoDataView';
import { AnyObject } from 'antd/es/_util/type';
import { RenderExpandIcon } from 'rc-table/lib/interface';

type TablePropsType = React.ComponentProps<typeof Table>;
type TableColumnsType = TablePropsType['columns'];
type TableSizeType = TablePropsType['size'];
type TableScrollType = TablePropsType['scroll'];
type TableExpandableType = TablePropsType['expandable'];
type TablePaginationType = TablePropsType['pagination'];
type TableSummaryType = TablePropsType['summary'];
type UnaryFunction<RecordType, ReturnType> = (el: RecordType) => ReturnType;

export type CrateTableProps<RecordType> = {
  columns: TableColumnsType;
  dataSource?: readonly RecordType[];
  emptyText?: string;
  rowClassName?: string | UnaryFunction<RecordType, string>;
  rowKey: keyof RecordType | UnaryFunction<RecordType, string>;
  showHeader?: boolean;
  size?: TableSizeType;
  scroll?: TableScrollType;
  expandable?: TableExpandableType;
  pagination?: TablePaginationType;
  testId?: string;
  summary?: TableSummaryType;
};

function CrateTable<RecordType extends AnyObject>({
  dataSource = [],
  columns,
  rowKey,
  showHeader = true,
  rowClassName,
  emptyText = '',
  size,
  scroll,
  expandable,
  pagination = false,
  testId,
  summary,
}: CrateTableProps<RecordType>) {
  const { formatMessage } = useIntl();

  const [tableEmpty, setTableEmpty] = useState(false);

  const showBody = () => {
    if (!dataSource) {
      return (
        <div className="mt-10 text-center">
          <Spin
            data-testid="crate-table-loading-spinner"
            indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
          />
        </div>
      );
    }
    return '';
  };

  const customExpandIcon: RenderExpandIcon<RecordType> = ({
    expanded,
    onExpand,
    record,
  }) => {
    return (
      <button
        className="cursor-pointer duration-200 h-[17px] mr-2.5 p-0 text-neutral-400 transition w-[17px] hover:border-crate-blue hover:text-crate-blue"
        onClick={event => onExpand(record, event)}
        type="button"
      >
        {expanded ? '−' : '+'}
      </button>
    );
  };

  const handleChange: TablePropsType['onChange'] = (
    _pagination,
    _filters,
    _sorter,
    tableContent,
  ) => {
    setTableEmpty(tableContent.currentDataSource.length === 0);
  };

  const getDescriptionOfEmptyTable = () => {
    if (tableEmpty) return formatMessage({ id: 'crateTable.noResultsFoundText' });
    return emptyText.length > 0
      ? emptyText
      : formatMessage({ id: 'crateTable.defaultEmptyText' });
  };

  return (
    <div data-testid={testId}>
      <Table<RecordType>
        bordered={false}
        className={!showHeader ? 'without-header' : ''}
        columns={columns}
        dataSource={dataSource}
        onChange={handleChange}
        pagination={pagination}
        rowClassName={rowClassName}
        rowKey={rowKey}
        showHeader={showHeader}
        size={size}
        scroll={scroll}
        expandable={expandable && { ...expandable, expandIcon: customExpandIcon }}
        summary={summary}
      />
      {dataSource &&
      (tableEmpty || dataSource.length === 0) &&
      (!summary || (summary && !summary(dataSource))) ? (
        <div className="mt-10 text-center">
          <NoDataView description={getDescriptionOfEmptyTable()} />
        </div>
      ) : (
        showBody()
      )}
    </div>
  );
}

export default CrateTable;
