import { CSSProperties, ForwardedRef, forwardRef, ReactNode } from 'react';
import styled from 'styled-components';

type Props<T extends {}> = {
  isLoading?: boolean;
  style?: CSSProperties;
  data?: T[];
  render: (data: T, index: number) => ReactNode;
  placeholder?: {
    message?: string;
    node?: ReactNode;
  };
  loader?: ReactNode;
  lazyLoaderDelay?: number;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  fetchNextPage?: () => void;
  disableAnimation?: boolean;
};

const List = <T extends {}>(
  props: Props<T>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <Style ref={ref} style={props.style}>
      {props.isLoading &&
        (props.loader || (
          <CenterFlex
            style={{ height: '100%', flex: 1 }}
            className="fallback-text"
          >
            Loading...
          </CenterFlex>
        ))}
      {props.data && props.data.length > 0 ? (
        <>
          {props.data.map(props.render)}
          {props.fetchNextPage &&
            props.hasNextPage &&
            !props.isFetchingNextPage && (
              <div onClick={props.fetchNextPage}>Load more</div>
            )}
          {props.isFetchingNextPage && (
            <CenterFlex style={{ height: 64 }}>Loading...</CenterFlex>
          )}
        </>
      ) : (
        !props.isLoading &&
        (props.placeholder?.node || (
          <CenterFlex
            style={{ height: '100%', flex: 1 }}
            className="fallback-text"
          >
            {props.placeholder?.message || 'No data'}
          </CenterFlex>
        ))
      )}
    </Style>
  );
};

const Style = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  .fallback-text {
    color: var(--gray-600);
    font-size: 12px;
  }
  &::-webkit-scrollbar {
    /* display: none !important; */
    position: absolute !important;
    /* width: 0px !important; */
  }

  &::-webkit-scrollbar-thumb {
    position: absolute !important;
    background-color: var(--gray-200) !important;
    border-radius: 8px !important;
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-track {
    position: fixed;
    background: transparent;
  }
  &::-webkit-scrollbar-corner {
    position: absolute !important;
    background: transparent !important;
    background-color: var(--gray-200) !important;
  }
`;

const CenterFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default forwardRef(List);
