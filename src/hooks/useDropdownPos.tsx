import { CSSProperties, RefObject, useCallback, useState } from 'react';

export type ModalOptions = {
  direction?: 'right' | 'bottom';
  offset?: {
    x?: number;
    y?: number;
  };
};

export type TriggerPos = {
  top?: number;
  left?: number;
};

type DropdownPosT = {
  top: number | 'auto';
  left: number | 'auto';
  right: number | 'auto';
  bottom: number | 'auto';
};

type TriggerT = {
  // ref, el, pos 셋 중 하나만 있어야 함
  ref?: RefObject<HTMLDivElement>;
  el?: HTMLElement | null;
  pos?: TriggerPos;

  options?: ModalOptions;
};

const useDropdownPos = (dropdownOpen: boolean, trigger: TriggerT) => {
  const [dropdownPos, setDropdownPos] = useState<CSSProperties>({});

  const setDropdownRef = useCallback(
    (dropdownEl: HTMLDivElement) => {
      if (!dropdownOpen) return;
      if (!dropdownEl) return;
      const el = trigger.ref?.current || trigger.el;

      const dropdownRect = dropdownEl.getBoundingClientRect();
      const [dropdownWidth, dropdownHeight] = [
        dropdownRect.width,
        dropdownRect.height,
      ];
      let dropdownPos: DropdownPosT = {
        top: 'auto',
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
      };

      const setPos = (pos: keyof DropdownPosT, value: number) => {
        const oppositePos = ['top', 'bottom'].includes(pos)
          ? pos === 'top'
            ? 'bottom'
            : 'top'
          : pos === 'left'
          ? 'right'
          : 'left';

        dropdownPos[pos] = value;
        dropdownPos[oppositePos] = 'auto';
      };

      if (el) {
        const triggerRect = el.getBoundingClientRect();
        // feedback action modal과 같이 드랍다운이 요소의 우측에서부터 열려야 하는 케이스
        if (trigger.options?.direction === 'right') {
          dropdownPos = {
            top: triggerRect.top + (trigger.options?.offset?.y || 0),
            left: triggerRect.right + (trigger.options?.offset?.x || 0),
            right: 'auto',
            bottom: 'auto',
          };

          if (
            triggerRect.right +
              dropdownWidth +
              (trigger.options?.offset?.x || 0) >
            window.innerWidth
          ) {
            setPos(
              'left',
              triggerRect.left -
                dropdownWidth -
                (trigger.options?.offset?.x || 0),
            );
          }

          if (triggerRect.top + dropdownHeight > window.innerHeight) {
            setPos('bottom', window.innerHeight - triggerRect.bottom);
          }

          if (triggerRect.bottom - dropdownHeight < 0) {
            setPos('top', (window.innerHeight - dropdownHeight) / 2);
          }

          setDropdownPos({ ...dropdownPos });
        } else {
          dropdownPos = {
            top:
              triggerRect.top +
              triggerRect.height +
              (trigger.options?.offset?.y || 0),
            left: triggerRect.left + (trigger.options?.offset?.x || 0),
            right: 'auto',
            bottom: 'auto',
          };

          if (
            triggerRect.left +
              dropdownWidth +
              (trigger.options?.offset?.x || 0) >
            window.innerWidth
          ) {
            setPos(
              'right',
              window.innerWidth -
                triggerRect.right -
                (trigger.options?.offset?.x || 0),
            );
          }

          if (
            triggerRect.top +
              triggerRect.height +
              (trigger.options?.offset?.y || 0) +
              dropdownHeight >
            window.innerHeight
          ) {
            setPos(
              'bottom',
              window.innerHeight -
                triggerRect.bottom -
                (trigger.options?.offset?.y || 0),
            );
          }
          setDropdownPos({ ...dropdownPos });
        }

        setDropdownPos({ ...dropdownPos });

        return;
      }

      if (trigger.pos?.top || trigger.pos?.left) {
        dropdownPos = {
          top: trigger.pos.top || 0,
          left: trigger.pos.left || 0,
          right: 'auto',
          bottom: 'auto',
        };

        // case when there is no space on the right side of the trigger
        if ((trigger.pos.left || 0) + dropdownWidth > window.innerWidth) {
          setPos('right', window.innerWidth - (trigger.pos.left || 0));
        }

        // case when there is no space below
        if ((trigger.pos.top || 0) + dropdownHeight > window.innerHeight) {
          setPos('bottom', window.innerHeight - (trigger.pos.top || 0));
        }

        setDropdownPos({ ...dropdownPos });
      }
    },
    [
      trigger.ref,
      trigger.el,
      trigger.pos?.left,
      trigger.pos?.top,
      trigger.options?.direction,
      trigger.options?.offset?.x,
      trigger.options?.offset?.y,
      dropdownOpen,
    ],
  );

  return { dropdownPos, setDropdownRef };
};

export default useDropdownPos;
