import React, { PropsWithChildren } from 'react';
import { FormattedMessage } from 'react-intl';
import Text from '../Text';

export type NoDataViewProps = PropsWithChildren<{
  description?: React.ReactNode;
  imageSrc?: string;
}>;

function NoDataView({
  description = <FormattedMessage id="noDataView.defaultText" />,
  imageSrc,
  children,
}: NoDataViewProps) {
  return (
    <div className="mt-8 text-center" data-testid="crate-empty-view">
      {imageSrc && (
        <img className="mx-auto my-4 w-24" src={imageSrc} alt="no data to display" />
      )}
      <Text pale>{description}</Text>
      <div className="mt-4">{children && children}</div>
    </div>
  );
}

export default NoDataView;
