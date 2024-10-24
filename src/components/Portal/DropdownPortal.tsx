import { CSSProperties, MouseEvent, ReactNode } from 'react';
import { keyframes, styled } from 'styled-components';
import Transition from '../Transition/Transition';
import Portal from './Portal';

type Props = {
  close?: (e: MouseEvent) => void;
  onBgRightClick?: (e: MouseEvent) => void;
  status: boolean;
  children: ReactNode;
  style?: CSSProperties;
  bgStyle?: CSSProperties;
};

const DropdownPortal = (props: Props) => {
  return (
    <Portal id="dropdown-layer">
      {props.status && (
        <DropdownBackground
          onClick={(e) => {
            e.stopPropagation();
            props.close?.(e);
          }}
          onContextMenu={(e) => {
            e.stopPropagation();
            e.preventDefault();
            props.onBgRightClick?.(e);
          }}
          style={props.bgStyle}
        />
      )}
      <Transition
        status={props.status}
        style={{
          zIndex: 5000,
          position: 'fixed',
          ...props.style,
        }}
        animations={{
          in: animations.dropdownIn,
          out: animations.dropdownOut,
        }}
        duration={120}
      >
        {props.children}
      </Transition>
    </Portal>
  );
};

const DropdownBackground = styled.div`
  position: fixed;
  z-index: 4000;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  cursor: unset;
`;

const animations = {
  dropdownIn: keyframes`
    0% {
      opacity: 0;
      transform: translateY(-10px);
      transform-origin: top center;
    }
    60% {
      opacity: 0.6;
      transform: translateY(-2px);
      transform-origin: top center;
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
      transform-origin: top center;
    }
  `,
  dropdownOut: keyframes`
    0% {
      opacity: 1;
      transform: translateY(0px);
      transform-origin: top center;
    }
    75% {
      opacity: 0.95;
      transform: translateY(-2px);
      transform-origin: top center;
    }
    100% {
      opacity: 0;
      transform: translateY(-10px);
      transform-origin: top center;
    }
  `,
};

export default DropdownPortal;
