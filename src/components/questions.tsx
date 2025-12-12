import type { ReactNode } from "react";

import { ExternalLink } from "./link";

const QA = ({ question, answer }: { question: ReactNode; answer: ReactNode }): JSX.Element => {
  return (
    <section>
      <p>
        <span className="text-accent-foreground mr-2 text-2xl">Q.</span>
        {question}
      </p>
      <p>
        <span className="text-accent-foreground mr-2 text-2xl">A.</span>
        {answer}
      </p>
    </section>
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
        <ExternalLink href="https://twitter.com/search?q=%23限界開発鯖&src=typed_query" withIcon>
          #限界開発鯖
        </ExternalLink>
      </>
    ),
  },
  {
    question: "どうやって参加するの？",
    answer: (
      <>
        弊サーバーは、<b>完全紹介制</b>です。 知り合いのメンバーから招待リンクを受け取ってください。
      </>
    ),
  },
] as const;

export const Questions = (): JSX.Element => (
  <div className="flex flex-col gap-4 pb-16" data-testid="questions">
    {questionAnswers.map((props, i) => (
      <QA key={i} {...props} />
    ))}
  </div>
);
