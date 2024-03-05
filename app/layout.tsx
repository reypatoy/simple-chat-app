import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App Title",
  description: "Simple App Title",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen">
        <main className="h-full w-full">
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </main>
      </body>
    </html>
  );
}
