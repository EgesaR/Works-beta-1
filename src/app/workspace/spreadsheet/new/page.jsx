"use client";

import Spreadsheet from "@/app/components/workspace/components/Spreadsheet";
import { useEffect, useRef } from "react";
import { Button, ButtonGroup, Avatar, AvatarGroup } from "@nextui-org";
import { MdMenu } from "react-icons/md";

const NewSpreadSheetPage = () => {
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current);
  }, []);

  return (
    <div className="w-full h-screen overflow-auto">
      <div>
        <nav className="w-full flex py-4 px-4">
          <div className="flex gap-6 items-center justify-center">
            <button className="font-medium text-black h-full w-full flex justify-center items-center mx-2dark:text-white">
              <MdMenu />
            </button>
            <button className="font-medium text-black h-full w-full flex justify-center items-center mx-2dark:text-white">
              File
            </button>
            <button className="font-medium text-black h-full w-full flex justify-center items-center mx-2dark:text-white">
              Edit
            </button>
            <button className="font-medium text-black h-full w-full flex justify-center items-center mx-2dark:text-white">
              View
            </button>
            <button className="font-medium text-black h-full w-full flex justify-center items-center mx-2dark:text-white">
              Insert
            </button>
            <button className="font-medium text-black h-full w-full flex justify-center items-center mx-2dark:text-white">
              Format
            </button>
            <button className="font-medium text-black h-full w-full flex justify-center items-center mx-2dark:text-white">
              Help
            </button>
          </div>
          <div className="w-[50%] mr-10 ml-auto flex">
            <h1 className="whitespace-nowrap">
              <u>2024 Growth</u>
            </h1>
            <div className="ml-auto px-6">
              <button className="px-4 py-1 mr-2 border border-gray-600 rounded-md">
                Share
              </button>
            </div>
          </div>
        </nav>
        <Spreadsheet rows={40} cols={90} />
      </div>
    </div>
  );
};

export default NewSpreadSheetPage;
