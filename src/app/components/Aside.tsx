"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@nextui-org/react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloudQueueRoundedIcon from "@mui/icons-material/CloudQueueRounded";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";

const Aside = () => {
  const [isActive, setIsActive] = useState(false);
  const tabList = [
    {
      icon: <GridViewOutlinedIcon className="text-sky-500" />
    },
    {
      icon: <SearchRoundedIcon className="text-sky-500" />
    },
    {
      icon: <CloudQueueRoundedIcon  className="text-sky-500" />
    },
    {
      icon: <StorefrontOutlinedIcon  className="text-sky-500" />
    },
    {
      icon: <CalendarMonthOutlinedIcon className="text-sky-500" />
    },
    {
      icon: <TextsmsOutlinedIcon className="text-sky-500" />
    },
  ]
  return (
    <aside className="h-full w-[6%] flex flex-col items-center text-black dark:text-white bg-white dark:bg-black py-4">
      <h1 className="font-semibold">W1B</h1>
      <div className="my-auto flex flex-col gap-4 items-center">
        {
        tabList.map((item, index) => (
        <Button isIconOnly variant="light" className="">
          {item.icon}
        </Button>
      ))
      }
      </div>
    </aside>
  );
};


export default Aside;
