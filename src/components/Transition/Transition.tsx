import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  HTMLProps,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Keyframes } from 'styled-components/dist/types';

type TransitionProps = {
  status: boolean;
  duration?: number; // ms
  style?: CSSProperties;
  animations?: {
    in: Keyframes;
    out: Keyframes;
  };
  disableAnimation?: boolean;
  // fallback must be static node
  fallback?: ReactNode;
  useVerticalScroll?: boolean;
};

type InnerState =
  | 'fallback'
  | 'fallbackOutTran'
  | 'inTran'
  | 'outTran'
  | 'child';

const Transition = (
  props: HTMLProps<HTMLDivElement> & TransitionProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  let outTimer = useRef<NodeJS.Timeout | null>(null);
  let inTimer = useRef<NodeJS.Timeout | null>(null);
  let fallbackOutTimer = useRef<NodeJS.Timeout | null>(null);
  const { status, duration = 200 } = props;
  const innerStateRef = useRef<InnerState>('fallback');
  const [innerState, setInnerState] = useState<InnerState>('fallback');

  const setInnerStates = (state: InnerState) => {
    innerStateRef.current = state;
    setInnerState(state);
  };

  useEffect(() => {
    if (outTimer.current) {
      clearTimeout(outTimer.current);
    }
    if (inTimer.current) {
      clearTimeout(inTimer.current);
    }
    if (fallbackOutTimer.current) {
      clearTimeout(fallbackOutTimer.current);
    }
    if (status) {
      if (innerStateRef.current === 'fallback' && props.fallback) {
        setInnerStates('fallbackOutTran');
        fallbackOutTimer.current = setTimeout(() => {
          setInnerStates('inTran');
          inTimer.current = setTimeout(() => {
            setInnerStates('child');
          }, duration);
        }, duration);
      } else {
        setInnerStates('inTran');
        inTimer.current = setTimeout(() => {
          setInnerStates('child');
        }, duration);
      }
    } else {
      if (innerStateRef.current === 'fallback') {
        setInnerStates('fallback');
      } else {
        setInnerStates('outTran');
      }
      outTimer.current = setTimeout(() => {
        setInnerStates('fallback');
      }, duration);
    }
    return () => {
      if (outTimer.current) {
        clearTimeout(outTimer.current);
      }
      if (inTimer.current) {
        clearTimeout(inTimer.current);
      }
      if (fallbackOutTimer.current) {
        clearTimeout(fallbackOutTimer.current);
      }
    };
  }, [duration, props.children, props.fallback, status]);

  const isFallback =
    innerState === 'fallback' || innerState === 'fallbackOutTran';

  const computedStatus = isFallback ? !status : status;

  if (props.disableAnimation)
    return (
      <Style
        id={props.id}
        ref={ref}
        key="original"
        status={computedStatus}
        duration={duration}
        style={props.style}
        animations={props.animations}
        className={props.className}
        onClick={props.onClick}
        disableAnimation={props.disableAnimation}
        useVerticalScroll={props.useVerticalScroll}
      >
        {!status ? props.fallback : props.children}
      </Style>
    );

  if (isFallback && !props.fallback) return null;

  return (
    <Style
      id={props.id}
      ref={ref}
      key="original"
      status={computedStatus}
      duration={duration}
      style={props.style}
      animations={props.animations}
      className={props.className}
      onClick={props.onClick}
      disableAnimation={props.disableAnimation}
      useVerticalScroll={props.useVerticalScroll}
    >
      {isFallback ? props.fallback : props.children}
    </Style>
  );
};

const Style = styled.div<TransitionProps>`
  ${({ useVerticalScroll: useScroll }) =>
    useScroll &&
    css`
      display: flex;
      flex-direction: column;
      overflow: auto;
      flex: 1;
    `}
  ${({ disableAnimation, status, animations, duration }) => {
    const inAnimation = animations?.in || animation.slideIn;
    const outAnimation = animations?.out || animation.slideOut;
    return (
      !disableAnimation &&
      css`
        animation-name: ${status ? inAnimation : outAnimation};
        animation-timing-function: ease-out;
        animation-duration: ${duration ? `${duration}ms` : '200ms'};
        animation-fill-mode: both;
      `
    );
  }}
`;

const animation = {
  slideIn: keyframes`
  0% {
    opacity: 0;
    transform: translateY(5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`,
  slideOut: keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(5px);
  }
`,
};

export default forwardRef(Transition);
