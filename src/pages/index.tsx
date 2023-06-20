import { Box, Heading, VStack } from "@chakra-ui/react";
import { Layout } from "../components/layout";
import type { NextPage } from "next";
import { Questions } from "../components/questions";
import styles from "../scss/pages/index.module.scss";

const Splash = () => (
  <Box className={styles.splash}>
    <svg width="300" height="150" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rainbow" x1="35%" y1="35%" x2="95%" y2="95%">
          <stop offset="0%" stopColor="orange" />
          <stop offset="20%" stopColor="#eded00" />
          <stop offset="40%" stopColor="green" />
          <stop offset="60%" stopColor="cyan" />
          <stop offset="80%" stopColor="blue" />
          <stop offset="100%" stopColor="violet" />
        </linearGradient>
      </defs>
      <text
        x="150"
        y="150"
        fontFamily="serif"
        fontSize="150"
        textAnchor="middle"
        textLength="270"
        stroke="url(#rainbow)"
      >
        カス
      </text>
    </svg>
  </Box>
);

const Home: NextPage = () => (
  <Layout pageName="限界開発鯖">
    <VStack
      sx={{
        ".splash::after": {
          borderColor: "highlighted",
        },
      }}
    >
      <Splash />
      <Heading as="h1" pt={32} pb={2} fontSize="5xl" textAlign="center">
        <em>&dagger;限界開発鯖&dagger;</em> へようこそ！
      </Heading>
      <Heading as="i" pb={32} fontSize="xl">
        Over Limit Development
      </Heading>
    </VStack>
    <Questions />
  </Layout>
);

export default Home;
