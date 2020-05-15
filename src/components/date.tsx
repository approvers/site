import { parseISO, format } from "date-fns";
import { FC } from "react";
import styles from "../sass/pages/blog.module.sass";

export const DateString: FC<{ dateString: string }> = ({ dateString }) => {
  const date = parseISO(dateString);
  return (
    <time className={styles.date} dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
};
