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
  condition: boolean;
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
  const { condition, duration = 200 } = props;
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
    if (condition) {
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
  }, [duration, props.children, props.fallback, condition]);

  const isFallback =
    innerState === 'fallback' || innerState === 'fallbackOutTran';

  const computedStatus = isFallback ? !condition : condition;

  if (props.disableAnimation)
    return (
      <Style
        id={props.id}
        ref={ref}
        key="original"
        style={props.style}
        className={props.className}
        onClick={props.onClick}
        $animations={props.animations}
        $condition={computedStatus}
        $duration={duration}
        $disableAnimation={props.disableAnimation}
        $useVerticalScroll={props.useVerticalScroll}
      >
        {!condition ? props.fallback : props.children}
      </Style>
    );

  if (isFallback && !props.fallback) return null;

  return (
    <Style
      id={props.id}
      ref={ref}
      key="original"
      style={props.style}
      className={props.className}
      onClick={props.onClick}
      $animations={props.animations}
      $condition={computedStatus}
      $duration={duration}
      $disableAnimation={props.disableAnimation}
      $useVerticalScroll={props.useVerticalScroll}
    >
      {isFallback ? props.fallback : props.children}
    </Style>
  );
};

type TransitionStyleProps = {
  $duration: number;
  $useVerticalScroll?: boolean;
  $disableAnimation?: boolean;
  $condition?: boolean;
  $animations?: {
    in: Keyframes;
    out: Keyframes;
  };
};

const Style = styled.div<TransitionStyleProps>`
  ${({ $useVerticalScroll }) =>
    $useVerticalScroll &&
    css`
      display: flex;
      flex-direction: column;
      overflow: auto;
      flex: 1;
    `}
  ${({ $disableAnimation, $condition, $animations, $duration }) => {
    const inAnimation = $animations?.in || animation.slideIn;
    const outAnimation = $animations?.out || animation.slideOut;
    return (
      !$disableAnimation &&
      css`
        animation-name: ${$condition ? inAnimation : outAnimation};
        animation-timing-function: ease-out;
        animation-duration: ${$duration ? `${$duration}ms` : '200ms'};
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
