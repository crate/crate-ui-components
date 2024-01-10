import { PropsWithChildren } from 'react';

export default function SectionSubtitle({ children }: PropsWithChildren) {
  return <h2 className="text-sm font-bold">{children}</h2>;
}
