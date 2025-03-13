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
import { Platform } from "../hooks/usePlatforms";

interface Props {
  parent_platforms: { platform: Platform }[];
}

// ✅ Define `iconMap` using `Record<string, React.ElementType>` to prevent formatting issues
const iconMap: Record<string, React.ElementType> = {
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

function PlatFormIconList({ parent_platforms }: Props) {
  const platforms = parent_platforms.map((p) => p.platform);

  console.log("Extracted platforms:", platforms); // ✅ Debugging log

  return (
    <HStack spacing={2} marginY={10}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug] || BsGlobe} // ✅ Ensure `platform.slug` exists
          boxSize={5}
          color="gray.500"
        />
      ))}
    </HStack>
  );
}

export default PlatFormIconList;
