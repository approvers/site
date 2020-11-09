import { parseISO, format } from "date-fns";
import type { FC } from "react";
import styles from "../scss/components/date.module.scss";

export const DateString: FC<{ dateString: string }> = ({ dateString }) => {
  const date = parseISO(dateString);
  return (
    <time className={styles.date} dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
};
