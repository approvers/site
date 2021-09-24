import { ExternalLink } from "./external-link";
import type { ReactNode } from "react";
import styles from "../scss/components/questions.module.scss";

const QA = ({ question, answer }: { question: ReactNode; answer: ReactNode }): JSX.Element => (
  <section className={styles.aboutUs}>
    <p className={styles.sentence}>
      <span className={styles.bigLetter}>Q.</span>
      {question}
    </p>
    <p className={styles.sentence}>
      <span className={styles.bigLetter}>A.</span>
      {answer}
    </p>
  </section>
);

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
        <ExternalLink href="https://twitter.com/search?q=%23限界開発鯖&src=typed_query">
          #限界開発鯖
        </ExternalLink>
      </>
    ),
  },
  {
    question: "どうやって参加するの？",
    answer: (
      <>
        弊サーバーは、<span className={styles.color}>完全紹介制</span>です。
        知り合いのメンバーから招待リンクを受け取ってください。
      </>
    ),
  },
] as const;

export const Questions = (): JSX.Element => (
  <div className={styles.text}>
    {questionAnswers.map((props, i) => (
      <QA key={i} {...props} />
    ))}
  </div>
);
