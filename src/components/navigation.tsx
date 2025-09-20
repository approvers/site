import { Button, Container, Drawer, VStack } from "@chakra-ui/react";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";

import { ColorModeIcon, OppositeColorModeIcon, useColorMode } from "../utils/color-mode";

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
        <Button minW="100%" asChild>
          <Link to={url}>{name}</Link>
        </Button>
      </Container>
    ))}
  </VStack>
);

const ThemeChangeButton = (): JSX.Element => {
  const { toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      <ColorModeIcon />
      →
      <OppositeColorModeIcon />
    </Button>
  );
};

export const Navigation = (props: LinksProps): JSX.Element => {
  return (
    <Drawer.Root placement="start">
      <Drawer.Backdrop />
      <Drawer.Trigger asChild>
        <Button pos="fixed" zIndex={100} bottom={0} m={8}>
          <FontAwesomeIcon icon={faBars} /> メニュー
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
