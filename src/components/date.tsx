import { format, parseISO } from "date-fns";

export const DateString = ({ dateString }: { dateString: string }): JSX.Element => {
  const date = parseISO(dateString);
  return (
    <time className="text-sm" data-testid="date-string">
      {format(date, "LLLL d, yyyy")}
    </time>
  );
};
