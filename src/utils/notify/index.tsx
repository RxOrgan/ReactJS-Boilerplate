// libs
import Notification from "rc-notification";
import {
  NoticeContent,
  NotificationInstance,
} from "rc-notification/es/Notification";
// components
import Spinner from "@/components/atoms/Spinner";

let notification: NotificationInstance;
Notification.newInstance(
  {
    maxCount: 5,
    style: {
      top: 15,
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  (n) => {
    notification = n;
  },
);

type TConfigs = Omit<NoticeContent, "content">;
type TLoadingConfigs = Omit<NoticeContent, "content" | "key" | "duration"> & {
  key: string;
};

const styles = {
  display: "flex",
  alignItems: "center",
  color: "#000000d9",
  padding: "0 3px",
};

export const notify = {
  success: (content: string, configs?: TConfigs) =>
    notification.notice({
      duration: 2,
      closable: false,
      ...configs,
      content: (
        <div style={styles}>
          <SuccessIcon />
          <span style={{ marginLeft: 8 }}>{content}</span>
        </div>
      ),
    }),
  error: (content: string, configs?: TConfigs) =>
    notification.notice({
      duration: 10,
      closable: true,
      ...configs,
      content: (
        <div style={styles}>
          <ErrorIcon />
          <span style={{ marginLeft: 8 }}>{content}</span>
        </div>
      ),
    }),
  info: (content: string, configs?: TConfigs) =>
    notification.notice({
      duration: 4,
      closable: true,
      ...configs,
      content: (
        <div style={styles}>
          <InfoIcon />
          <span style={{ marginLeft: 8 }}>{content}</span>
        </div>
      ),
    }),
  warn: (content: string, configs?: TConfigs) =>
    notification.notice({
      duration: 4,
      closable: true,
      ...configs,
      content: (
        <div style={styles}>
          <WarningIcon />
          <span style={{ marginLeft: 8 }}>{content}</span>
        </div>
      ),
    }),
  pure: (content: string, configs?: TConfigs) =>
    notification.notice({
      duration: 4,
      closable: true,
      ...configs,
      content: (
        <div style={styles}>
          <span style={{ marginLeft: 8 }}>{content}</span>
        </div>
      ),
    }),
  /**
   * loading
   * @description Create a loading notification that can be closed later
   * @param content
   * @param key
   * @example
   * notify.loading("Notify message", { key: "a-unique-key" });
   * // Close notify by call
   * notify.remove("a-unique-key");
   */
  loading: (content: string, configs: TLoadingConfigs) =>
    notification.notice({
      duration: 0,
      closable: true,
      ...configs,
      content: (
        <div style={styles}>
          <Spinner />
          <span style={{ marginLeft: 8 }}>{content}</span>
        </div>
      ),
    }),
  /**
   * destroy
   * @description Destroy all notices
   */
  destroy: () => {
    notification.destroy();
  },
  /**
   * remove
   * @description Remove notice by key
   */
  remove: (key: string) => {
    notification.removeNotice(key);
  },
};

// Icons
function ErrorIcon() {
  return (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="close-circle"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        color="#ff4d4f"
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="info-circle"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        color="#1890ff"
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
      >
      </path>
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="check-circle"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        color="#52C444"
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
      >
      </path>
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="exclamation-circle"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        color="#faad14"
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
      >
      </path>
    </svg>
  );
}
