import { PropsWithChildren } from 'react';

type SectionProps = {
  title: string;
};

export default function Section({
  title = '',
  children,
}: PropsWithChildren<SectionProps>) {
  return (
    <div className="w-full border p-4 flex flex-col gap-4">
      <h6 className="font-bold text-xl">{title}</h6>
      <div className="flex gap-2">{children}</div>
    </div>
  );
}
