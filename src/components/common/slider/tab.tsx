import React, { useCallback, useEffect } from "react";
import InfoIcon from "../ui/info.svg";

import styles from "./tab.module.css";
import classNames from "classnames";

type Props = {
  active?: boolean;
  label: string;
  onClick: (data: { ref?: React.RefObject<HTMLDivElement> }) => void;
  onClickInfo: () => void;
  emitTabChangeOnMount?: boolean;
};

export const SliderTab = ({
  onClick,
  onClickInfo,
  active,
  label,
  emitTabChangeOnMount,
}: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    onClick({ ref });
  }, [onClick]);

  useEffect(() => {
    if (emitTabChangeOnMount) handleClick();
  }, [emitTabChangeOnMount, handleClick]);

  return (
    <section
      ref={ref}
      onClick={handleClick}
      className="flex items-center gap-[8px] px-[12px] py-[6px] md:px-[16px] md:py-[12px]"
    >
      <a
        className={classNames(
          "cursor-pointer text-text-sm text-tetriary transition-colors hover:text-secondary",
          {
            "!text-secondary": active,
          }
        )}
      >
        {label}
      </a>
      <button
        onClick={onClickInfo}
        className="transition-opacity hover:opacity-50"
      >
        <InfoIcon
          className={classNames("h-3 w-3", styles.tabIcon, {
            [styles.tabIconActive]: active,
          })}
        />
      </button>
    </section>
  );
};
