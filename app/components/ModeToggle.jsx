// components/ModeToggle.jsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { forwardRef } from "react";

export const ModeToggle = forwardRef(function ModeToggle(props, ref) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      ref={ref}  // Now properly defined through forwardRef
      {...props}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="h-10 w-10 rounded-md border p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
});



