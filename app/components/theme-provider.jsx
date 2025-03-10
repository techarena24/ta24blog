"use client";

import { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes"

const ThemeProvider = ({ children, ...props }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null;
    }

  return (
    <NextThemesProvider {...props} attribute="class" defaultTheme="system" enableSystem={true}>
        {children}
    </NextThemesProvider>
  )
}

export default ThemeProvider