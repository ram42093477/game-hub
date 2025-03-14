import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <HStack padding="10px" justifyContent="space-between" width="100%">
      <Image src={logo} boxSize="60px" alt="Logo" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
