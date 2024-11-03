"use client";

import Spreadsheet from "@/app/components/workspace/components/Spreadsheet";
import { useEffect, useRef } from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import { MdMenu } from "react-icons/md";
import { IoReturnUpBack, IoReturnUpForwardOutline } from "react-icons/io5";
import { FaRegClipboard } from "react-icons/fa";
import { FaPaste } from "react-icons/fa6";
import { IoMdCut } from "react-icons/io";

const NewSpreadSheetPage = () => {
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current);
  }, []);

  return (
    <div className="w-full h-screen overflow-auto">
      <div>
        <nav className="w-full flex py-3 px-4">
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
          <div className="w-[50%] mr-6 ml-auto flex flex-row items-center">
            <h1 className="whitespace-nowrap font-bold">
              <u>2024 Growth</u>
            </h1>
            <div className="ml-auto flex px-4 gap-6">
              
              <button className="px-4 py-0.25 rounded-md border border-gray-500">
                Share
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size="sm"
              />
            </div>
          </div>
        </nav>
        <nav className="flex w-full px-4">
          <section className="border-r-2 border-gray-500 flex gap-3 text-base px-3">
            <button>
              <IoReturnUpBack />
            </button>
            <button>
              <IoReturnUpForwardOutline />
            </button>
          </section>
          <section className="border-r-2 border-gray-500 flex gap-3 text-base px-3">
            <button>
<FaRegClipboard />
            </button>
            <button>
<FaPaste />
            </button>
            <button>
<IoMdCut />
            </button>
          </section>
        </nav>
        <Spreadsheet rows={40} cols={90} />
      </div>
    </div>
  );
};

export default NewSpreadSheetPage;
