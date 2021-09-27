import { format, parseISO } from "date-fns";
import styles from "../scss/components/date.module.scss";

export const DateString = ({ dateString }: { dateString: string }): JSX.Element => {
  const date = parseISO(dateString);
  return (
    <time className={styles.date} dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
};
