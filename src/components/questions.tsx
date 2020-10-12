import { FC, ReactNode } from "react";
import { ExternalLink } from "./externalLink";
import styles from "../scss/pages/index.module.scss";

const QA: FC<{ question: ReactNode; answer: ReactNode }> = ({ question, answer }) => (
  <section className={styles.aboutUs}>
    <p className={styles.ans}>
      <span className={styles.ansAlphabet}>Q.</span>
      {question}
    </p>
    <p className={styles.ans}>
      <span className={styles.ansAlphabet}>A.</span>
      {answer}
    </p>
  </section>
);

export const Questions: FC = () => (
  <div>
    <QA
      question={<>限界開発鯖ってなに?</>}
      answer={<>限界開発鯖は限界高専生が限界状態で開発を行っているDiscord鯖です。</>}
    />

    <QA
      question={<>限界開発鯖の雰囲気が知りたい！</>}
      answer={
        <>
          こちらへどうぞ &rarr;{" "}
          <ExternalLink
            href="https://twitter.com/search?q=%23限界開発鯖&src=typed_query"
            className={styles.genkaiLink}
          >
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
