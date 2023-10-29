import { Link } from '@mui/material';
import { PropsWithChildren, ReactNode, useMemo } from 'react';

type TodoLinkProps = PropsWithChildren<
  | {
      type: 'default' | never;
      href: string;
    }
  | {
      type: 'ticket';
      ticketId: number;
    }
>;

const getLinkData = (props: TodoLinkProps): [string, ReactNode] => {
  switch (props.type) {
    case 'ticket':
      return [`https://github.com/<USER>/<PROJECT>/issues/${props.ticketId}`, `#${props.ticketId}`];
    case 'default':
    default:
      return [props.href, props.children];
  }
};

export const TodoLink = (props: TodoLinkProps) => {
  const [link, label] = useMemo(() => getLinkData(props), [props]);

  return (
    <Link target="_blank" fontWeight={600} href={link}>
      {label}
    </Link>
  );
};
