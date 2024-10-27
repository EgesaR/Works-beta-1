"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Input,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import AccountIconDropDown from "./AccountIconDropDown";

const NavBar = () => {
  return (
    <nav className="w-full flex flex-row py-2 items-center">
      <h2 className="text-lg font-semobold">Works Beta Dashboard</h2>
      <div className="ml-auto flex gap-2 items-center">
        <Input
          type="text"
          placeholder="Search..."
          labelPlacement="outside"
          startContent={
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="lg"
              className="text-default-400 pointer-events-none flex-shrink-0 mr-2"
            />
          }
        />
        <Button isIconOnly className="bg-sky-500" aria-label="Like">
          <FontAwesomeIcon icon={faBell} size="lg" />
        </Button>
        <ThemeSwitcher />
        <AccountIconDropDown />
      </div>
    </nav>
  );
};

export default NavBar;
