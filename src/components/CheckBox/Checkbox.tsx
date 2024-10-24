import { MouseEvent } from 'react';
import styled, { css } from 'styled-components';
import IcCheck from '../../assets/IcCheck';

type Props = {
  checked: boolean;
  disabled?: boolean;
  onChange: (status: boolean, e?: MouseEvent) => void;
};

const Checkbox = (props: Props) => {
  const clickHandler = (e: MouseEvent) => {
    e.stopPropagation();
    if (props.disabled) return;
    props.onChange(!props.checked, e);
  };
  return (
    <Style onClick={clickHandler}>
      <Background checked={props.checked} disabled={props.disabled} />
      <CheckWrapper>
        {props.checked && (
          <IcCheck width={14} height={14} className="ic-check" />
        )}
      </CheckWrapper>
    </Style>
  );
};

type StyleProps = {
  checked: boolean;
  disabled?: boolean;
};

const CenterFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div<StyleProps>`
  position: absolute;
  z-index: 1;
  width: 14px;
  height: 14px;
  border-radius: 2px;
  transition: all 0.2s;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid var(--primary-100);
  }
  ${(props) =>
    props.checked
      ? css`
          border: 1px solid var(--primary-100);
          background-color: var(--primary-100);
        `
      : css`
          border: 1px solid var(--gray-500);
          background-color: transparent;
        `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: var(--gray-500);
      border: 1px solid var(--gray-500);
    `}
`;

const CheckWrapper = styled(CenterFlex)`
  position: relative;
  z-index: 2;
`;

const Style = styled(CenterFlex)`
  width: 24px;
  padding: 0 4px;
  height: 20px;
  position: relative;
  cursor: pointer;
  color: var(--gray-100);
  .ic-check {
    color: var(--gray-100);
  }
`;

export default Checkbox;
