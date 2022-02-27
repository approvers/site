import { Box, Heading, VStack } from "@chakra-ui/react";
import { Layout } from "../components/layout";
import type { NextPage } from "next";
import { Questions } from "../components/questions";
import styles from "../scss/pages/index.module.scss";

const Home: NextPage = () => (
  <Layout pageName="限界開発鯖">
    <VStack>
      <Heading as="h1" fontSize="5xl" pt={32} pb={2} textAlign="center" zIndex={10}>
        <em>&dagger;限界開発鯖&dagger;</em> へようこそ！
      </Heading>
      <Heading as="i" fontSize="xl" pb={32} zIndex={10}>
        Over Limit Development
      </Heading>
      <Box className={styles.splash} zIndex={5} />
    </VStack>
    <Questions />
  </Layout>
);

export default Home;
