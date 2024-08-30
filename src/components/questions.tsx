import { Container, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import type { ReactNode } from "react";

const QA = ({ question, answer }: { question: ReactNode; answer: ReactNode }): JSX.Element => {
  return (
    <Container as="section">
      <Text>
        <Text as="span" mr={2} color="highlighted" fontSize="2xl">
          Q.
        </Text>
        {question}
      </Text>
      <Text>
        <Text as="span" mr={2} color="highlighted" fontSize="2xl">
          A.
        </Text>
        {answer}
      </Text>
    </Container>
  );
};

const questionAnswers = [
  {
    question: "限界開発鯖ってなに?",
    answer: "限界開発鯖は高専生を中心に限界になった人々が限界状態で開発を行う Discord 鯖です。",
  },
  {
    question: "限界開発鯖の雰囲気が知りたい！",
    answer: (
      <>
        こちらへどうぞ &rarr;{" "}
        <Link href="https://twitter.com/search?q=%23限界開発鯖&src=typed_query" isExternal>
          #限界開発鯖
        </Link>
      </>
    ),
  },
  {
    question: "どうやって参加するの？",
    answer: (
      <>
        弊サーバーは、<Text as="b">完全紹介制</Text>です。
        知り合いのメンバーから招待リンクを受け取ってください。
      </>
    ),
  },
] as const;

export const Questions = (): JSX.Element => (
  <VStack pb={16}>
    {questionAnswers.map((props, i) => (
      <QA key={i} {...props} />
    ))}
  </VStack>
);
