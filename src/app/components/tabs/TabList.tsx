import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faFaceGrinWide } from "@fortawesome/free-solid-svg-icons";
import { Tabs, Tab, Card, CardBody, Button } from "@nextui-org/react";
import Aside from "./components/Aside";
import NavBar from "./components/NavBar";
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

import HomeTab from "./home";
import CloudTab from "./cloud";
import MarketPlaceTab from "./marketplace";
import ScheduleTab from "./schedule" 
import ChatsTab from "./chats"

  
const TabList = ({ children }) => {
  return (
    <Tabs
      aria-label="Options"
      placement={"start"}
      variant={"underlined"}
      classNames={{
        tabList:
          "gap-6 w-full relative rounded-none p-0 border-r border-divider",
        cursor: "w-full bg-[#22d3ee]",
        tabContent: "group-data-[selected=true]:text-[#06b6d4]",
      }}
    >
      <Tab
        key="home"
        title={
          <div className="flex items-center space-x-2">
            <GridViewOutlinedIcon />
          </div>
        }
        className="w-full"
        id="asideBtn"
      >
        <HomeTab />
      </Tab>
      <Tab
        key="cloud"
        title={
          <div className="flex items-center space-x-2">
            <CloudQueueRoundedIcon />
          </div>
        }
        id="asideBtn"
      >
        <CloudTab />
      </Tab>
      <Tab
        key="marketPlace"
        title={
          <div className="flex items-center space-x-2">
            <StorefrontOutlinedIcon />
          </div>
        }
        className="w-full"
        id="asideBtn"
      >
        <MarketPlaceTab />
      </Tab>
      <Tab
        key="schedule"
        title={
          <div className="flex items-center space-x-2">
            <CalendarMonthOutlinedIcon />
          </div>
        }
        className="w-full"
        id="asideBtn"
      >
        <ScheduleTab />
      </Tab>
      <Tab
        key="chats"
        title={
          <div className="flex items-center space-x-2">
            <TextsmsOutlinedIcon />
          </div>
        }
        className="w-full"
        id="asideBtn"
      >
        <ChatsTab />
      </Tab>
    </Tabs>
  );
};

export default TabList;
