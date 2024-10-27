// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { VisuallyHidden, useSwitch, Button } from "@nextui-org/react";
import { SunIcon } from "./icons/sun";
import { MoonIcon } from "./icons/moon";

export function ThemeSwitcher(props) {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <Button
          isIconOnly
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-9 h-10",
              "flex items-center justify-center",
              "rounded-lg text-black dark:text-white bg-default-100 hover:bg-default-200",
            ],
          })}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {isSelected ? <SunIcon /> : <MoonIcon />}
        </Button>
      </Component>
    </div>
  );
}
