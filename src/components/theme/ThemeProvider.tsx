"use client";

import { ThemeProvider as NextThemesProdiver } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => (
  <NextThemesProdiver {...props}>{children}</NextThemesProdiver>
);
