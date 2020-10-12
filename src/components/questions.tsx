import type { FC, ReactNode } from "react";
import { ExternalLink } from "./external-link";
import styles from "../scss/components/questions.module.scss";

const QA: FC<{ question: ReactNode; answer: ReactNode }> = ({ question, answer }) => (
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

export const Questions: FC = () => (
  <div className={styles.text}>
    <QA
      question={"限界開発鯖ってなに?"}
      answer={"限界開発鯖は高専生を中心に限界になった人々が限界状態で開発を行う Discord 鯖です。"}
    />

    <QA
      question={"限界開発鯖の雰囲気が知りたい！"}
      answer={
        <>
          こちらへどうぞ &rarr;{" "}
          <ExternalLink href="https://twitter.com/search?q=%23限界開発鯖&src=typed_query">
            #限界開発鯖
          </ExternalLink>
        </>
      }
    />
    <QA
      question={<>どうやって参加するの？</>}
      answer={
        <>
          弊サーバーは、<span className={styles.color}>完全紹介制</span>です。
          知り合いのメンバーから招待リンクを受け取ってください。
        </>
      }
    />
  </div>
);
