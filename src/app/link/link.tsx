"use client";

import { Link, VStack } from "@chakra-ui/react";
import { Link as LinkData } from "../lib/link-fetch";
import { boldUnderline } from "../lib/theme";

export const LinkPage = ({ links }: { links: readonly LinkData[] }) => (
  <VStack>
    {links.map(({ name, url }, index) => (
      <Link
        key={index}
        fontSize="2xl"
        fontWeight="bold"
        bgGradient={boldUnderline}
        href={url}
        isExternal
      >
        {name}
      </Link>
    ))}
  </VStack>
);
