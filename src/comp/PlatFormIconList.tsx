import React from "react";
import { Platform } from "../hooks/UseGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface Props {
  platforms: { platform: Platform }[]; // ✅ Define platforms as an array
}

// Mapping platform slugs to icons
const iconMap: { [key: string]: React.ElementType } = {
  pc: FaWindows,
  ps5: FaPlaystation,
  ps4: FaPlaystation,
  "xbox-series-x": FaXbox,
  switch: SiNintendo,
  mobile: FaAndroid,
  ios: MdPhoneIphone,
  mac: FaApple,
  linux: FaLinux,
  web: BsGlobe,
};

function PlatFormIconList({ platforms }: Props) {
  return (
    <HStack spacing={2} marginY={10}>
      {platforms.map((plat) => (
        <Icon
          key={plat.platform.id}
          as={iconMap[plat.platform.slug] || BsGlobe} // Default to globe icon
          boxSize={5}
          color="gray.500" // ✅ Adds a subtle color
        />
      ))}
    </HStack>
  );
}

export default PlatFormIconList;
