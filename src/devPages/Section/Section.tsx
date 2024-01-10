import cx from 'classnames';
import { PropsWithChildren } from 'react';

type SectionProps = {
  title: string;
  orientation?: 'vertical' | 'horizontal';
};

export default function Section({
  title = '',
  orientation = 'horizontal',
  children,
}: PropsWithChildren<SectionProps>) {
  return (
    <div className="w-full border p-4 mt-2 flex flex-col gap-4 bg-white">
      <h6 className="font-bold text-xl">{title}</h6>
      <div
        className={cx(
          'flex gap-2',
          orientation === 'horizontal' ? 'flex-row' : 'flex-col',
        )}
      >
        {children}
      </div>
    </div>
  );
}
