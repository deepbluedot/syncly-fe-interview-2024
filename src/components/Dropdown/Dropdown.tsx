import { RefObject } from 'react';
import styled, { CSSProperties } from 'styled-components';
import useDropdownPos from '../../hooks/useDropdownPos';
import List from '../List/List';
import DropdownPortal from '../Portal/DropdownPortal';
import DropdownItem, { OptionItem } from './DropdownItem';

type Props = {
  options: OptionItem[];
  status: boolean;
  close: () => void;
  anchorRef: RefObject<HTMLDivElement>;
  style?: CSSProperties;
  loading?: boolean;
};

const Dropdown = (props: Props) => {
  const { dropdownPos, setDropdownRef } = useDropdownPos(props.status, {
    ref: props.anchorRef,
    options: {
      offset: {
        y: 8,
      },
    },
  });

  return (
    <DropdownPortal
      status={props.status}
      close={props.close}
      style={dropdownPos}
    >
      <Style ref={setDropdownRef} style={props.style}>
        <List
          data={props.options}
          isLoading={props.loading}
          render={(el) => {
            const item = el as OptionItem;
            return <DropdownItem key={item.value} {...item} />;
          }}
        />
      </Style>
    </DropdownPortal>
  );
};

const Style = styled.div`
  background-color: var(--gray-100);
  padding: 8px;
  border-radius: 16px;
  min-width: 200px;
  width: fit-content;
  box-shadow: 1px 4px 16px var(--gray-300);
  overflow: auto;
  max-height: 340px;
`;

export default Dropdown;
