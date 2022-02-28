import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link,
  VStack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextLink from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
        <NextLink href={url}>
          <a>
            <Button minW="100%">{name}</Button>
          </a>
        </NextLink>
      </Container>
    ))}
  </VStack>
);

export const Navigation = (props: LinksProps): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const { colorMode, toggleColorMode } = useColorMode();

  const currentTheme = <FontAwesomeIcon icon={colorMode === "light" ? faSun : faMoon} />;
  const oppositeTheme = <FontAwesomeIcon icon={colorMode === "light" ? faMoon : faSun} />;

  return (
    <>
      <Button
        ref={btnRef}
        leftIcon={<FontAwesomeIcon icon={faBars} />}
        onClick={onOpen}
        pos="fixed"
        m={8}
        bottom={0}
        zIndex={100}
      >
        メニュー
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Approvers</DrawerHeader>
          <DrawerBody>
            <Links {...props} />
          </DrawerBody>
          <Button onClick={toggleColorMode} leftIcon={currentTheme} rightIcon={oppositeTheme}>
            →
          </Button>
        </DrawerContent>
      </Drawer>
    </>
  );
};
