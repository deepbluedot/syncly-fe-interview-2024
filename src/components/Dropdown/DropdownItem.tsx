import { ReactNode } from 'react';
import { StringNumberValue } from 'src/types';
import styled from 'styled-components';
import Checkbox from '../CheckBox/Checkbox';

export type OptionItem = {
  value: StringNumberValue;
  label: ReactNode;

  // check가 불가능한 옵션 아이템인 경우 클릭 시 콜백
  onClick?: (value: StringNumberValue) => void;

  // check가 가능한 옵션 아이템인지 여부
  enableCheck?: {
    checked: boolean;
    onCheck: (value: StringNumberValue, status: boolean) => void; // check시 실행할 콜백
  };
};

const DropdownItem = (props: OptionItem) => {
  return (
    <Style
      onClick={() => {
        props.onClick?.(props.value);
        props.enableCheck?.onCheck?.(props.value, !props.enableCheck.checked);
      }}
    >
      {props.enableCheck && (
        <Checkbox
          checked={props.enableCheck.checked}
          onChange={(status) => {
            props.enableCheck?.onCheck(props.value, status);
          }}
        />
      )}
      {props.label}
    </Style>
  );
};

const Style = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 10px;
  min-height: 32px;
  width: 100%;
  border-radius: 6px;
  background-color: var(--gray-100);
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: var(--gray-200);
  }
`;

export default DropdownItem;
