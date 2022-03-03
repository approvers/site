import { Box, Heading, VStack } from "@chakra-ui/react";
import { Layout } from "../components/layout";
import type { NextPage } from "next";
import { Questions } from "../components/questions";
import styles from "../scss/pages/index.module.scss";

const Home: NextPage = () => (
  <Layout pageName="限界開発鯖">
    <VStack
      sx={{
        ".splash::after": {
          borderColor: "highlighted",
        },
      }}
    >
      <Heading as="h1" zIndex={10} pt={32} pb={2} fontSize="5xl" textAlign="center">
        <em>&dagger;限界開発鯖&dagger;</em> へようこそ！
      </Heading>
      <Heading as="i" zIndex={10} pb={32} fontSize="xl">
        Over Limit Development
      </Heading>
      <Box className={styles.splash} zIndex={5} />
    </VStack>
    <Questions />
  </Layout>
);

export default Home;
