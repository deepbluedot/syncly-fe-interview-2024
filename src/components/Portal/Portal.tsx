import { ReactNode } from 'react';
import reactDom from 'react-dom';

const Portal = (props: { id: string; children: ReactNode }) => {
  const el = document.getElementById(props.id) as HTMLDivElement;
  return reactDom.createPortal(props.children, el);
};

export default Portal;
