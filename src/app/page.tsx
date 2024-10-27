"use client";
import NavBar from "./components/NavBar";
import TabList from "./components/tabs/TabList";


export default function Home() {
  

  return (
    <div className="w-full h-screen flex flex-row">
      <div className="h-full w-full text-black dark:text-white bg-gradient-to-r from-orange-50 via-brown-50 to-indigo-50 dark:bg-gradient-to-tl dark:from-[#753c73] dark:to-[#0CBABA] px-2">
        <NavBar />
        <TabList />
      </div>
    </div>
  );
}

const IconButton = ({ icon }) => {
  return (
    <button
      type="button"
      className={`
    text-slate-500 bg-white hover:bg-blue-700 hover:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium
    rounded-full text-sm h-9 w-9  text-center flex items-center justify-center dark:border-blue-500 dark:text-slate-500 dark:hover:text-white
     dark:focus:ring-blue-800 dark:hover:bg-blue-500
      `}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
      <span className="sr-only">Icon description</span>
    </button>
  );
};
