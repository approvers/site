"use client";

import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextLink from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { useRef } from "react";

export interface LinksProps {
  links: readonly Readonly<{
    name: string;
    url: string;
  }>[];
}

const Links = ({ links }: LinksProps): JSX.Element => (
  <VStack>
    {links.map(({ name, url }) => (
      <Container key={name}>
        <Button as={NextLink} minW="100%" href={url}>
          {name}
        </Button>
      </Container>
    ))}
  </VStack>
);

const ThemeChangeButton = (): JSX.Element => {
  const { toggleColorMode } = useColorMode();

  const currentTheme = <FontAwesomeIcon icon={useColorModeValue(faSun, faMoon)} />;
  const oppositeTheme = <FontAwesomeIcon icon={useColorModeValue(faMoon, faSun)} />;

  return (
    <Button leftIcon={currentTheme} onClick={toggleColorMode} rightIcon={oppositeTheme}>
      →
    </Button>
  );
};

export const Navigation = (props: LinksProps): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Button
        ref={btnRef}
        pos="fixed"
        zIndex={100}
        bottom={0}
        m={8}
        leftIcon={<FontAwesomeIcon icon={faBars} />}
        onClick={onOpen}
      >
        メニュー
      </Button>
      <Drawer finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Approvers</DrawerHeader>
          <DrawerBody>
            <Links {...props} />
          </DrawerBody>
          <ThemeChangeButton />
        </DrawerContent>
      </Drawer>
    </>
  );
};
