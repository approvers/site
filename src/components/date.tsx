import { format, parseISO } from "date-fns";
import { Text } from "@chakra-ui/react";

export const DateString = ({ dateString }: { dateString: string }): JSX.Element => {
  const date = parseISO(dateString);
  return (
    <Text as="time" dateTime={dateString} fontSize="sm">
      {format(date, "LLLL d, yyyy")}
    </Text>
  );
};
