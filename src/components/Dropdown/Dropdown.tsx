import { RefObject } from 'react';
import styled, { CSSProperties } from 'styled-components';
import useDropdownPos from '../../hooks/useDropdownPos';
import List from '../List/List';
import DropdownPortal from '../Portal/DropdownPortal';
import DropdownItem, { OptionItem } from './DropdownItem';

type Props = {
  options: OptionItem[]; // 드랍다운 컴포넌트가 렌더링하는 option의 리스트
  status: boolean; // 드랍다운의 열림/닫힘 상태
  close: () => void; // 드랍다운을 닫는 close callback
  anchorRef: RefObject<HTMLDivElement>; // 드랍다운이 열릴 위치의 기준이 되는 element요소의 ref
  style?: CSSProperties; // 드랍다운의 커스텀 스타일 (optional)
  loading?: boolean; // 드랍다운 옵션 리스트를 불러올 경우를 위한 로딩 상태 (optional)
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
