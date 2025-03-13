import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSelectSortOrder: (sortorder: string) => void;
}
function SortSelector({ onSelectSortOrder }: Props) {
  const sortOrders = [
    { value: "", label: "Relevence" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Relese Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} size="md">
        Order By:Relevence
      </MenuButton>
      <MenuList>
        {sortOrders.map((ord) => (
          <MenuItem
            onClick={() => onSelectSortOrder(ord.value)}
            key={ord.value}
            value={ord.value}
          >
            {ord.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
