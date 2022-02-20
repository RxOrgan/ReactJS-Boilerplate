// libs
import { CSSProperties, ReactNode } from "react";
import classNames from "classnames";
// hooks
import { useTranslate } from "@/hooks/useTranslate";

type TProps = {
  label?: ReactNode;
  lazyLabel?: "load-app-data" | "authenticating";
  className?: string;
  style?: CSSProperties;
};
/**
 * PageLoading
 * @param label
 * @param lazyLabel - Faster use common loading label
 * @param className
 * @param style
 */
export default function PageLoading({
  label,
  lazyLabel,
  className,
  style,
}: TProps) {
  const { t } = useTranslate();
  const withLocaleLazyLabel = lazyLabel
    ? {
        "load-app-data": t("loadingAppData"),
        authenticating: t("authenticating"),
      }[lazyLabel]
    : "";

  return (
    <div
      className={classNames("page-loading-wrapper", className)}
      style={style}
    >
      <div className="page-loading">
        <div className="page-loading__center-part"></div>
        <div className="page-loading__loader">
          <div className="page-loading__loader-content"></div>
        </div>
      </div>
      <div className="page-loading-label">{label || withLocaleLazyLabel}</div>
    </div>
  );
}
