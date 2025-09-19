import { Button, Container, Drawer, VStack } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "../utils/color-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";

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
        <Button as={Link} minW="100%" to={url}>
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
  return (
    <Drawer.Root placement="left">
      <Drawer.Backdrop />
      <Drawer.Trigger asChild>
        <Button
          pos="fixed"
          zIndex={100}
          bottom={0}
          m={8}
          leftIcon={<FontAwesomeIcon icon={faBars} />}
        >
          メニュー
        </Button>
      </Drawer.Trigger>
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.CloseTrigger />
          <Drawer.Header borderBottomWidth="1px">Approvers</Drawer.Header>
          <Drawer.Body>
            <Links {...props} />
          </Drawer.Body>
          <ThemeChangeButton />
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
};
