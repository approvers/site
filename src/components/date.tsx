import { format, parseISO } from "date-fns";
import React from "react";
import { Text } from "@chakra-ui/react";

export const DateString = ({ dateString }: { dateString: string }): JSX.Element => {
  const date = parseISO(dateString);
  return (
    <Text as="time" fontSize="sm" dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </Text>
  );
};
