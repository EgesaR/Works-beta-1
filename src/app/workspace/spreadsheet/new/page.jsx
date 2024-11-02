"use client";

import Spreadsheet from "@/app/components/workspace/components/Spreadsheet";
import { useEffect, useRef } from "react";

const NewSpreadSheetPage = () => {
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current);
  }, []);

  return (
    <div className="w-full h-screen overflow-auto">
      <div>
        New Spreadsheet Page
        <div ref={ref} id="plTable">
          1
        </div>
        <div ref={ref} id="plTable">
          2
        </div>
        <Spreadsheet rows={40} cols={90} />
      </div>
    </div>
  );
};

export default NewSpreadSheetPage;