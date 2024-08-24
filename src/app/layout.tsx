import type { Metadata } from "next";
import { Inter, Space_Grotesk  } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({ subsets: ["latin"] });
const space_grotesk = Space_Grotesk({subsets: ["latin"]})
export const metadata: Metadata = {
  title: "Writix",
  description: "Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={space_grotesk.className}>{children}</body> */}
      <body className={space_grotesk.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
