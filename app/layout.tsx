import  AppTheme from "@/utils/theme-provider";
import "./globals.css";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });


export const metadata = {
  title: "Feedback IO",
  description: "Customer feedback application",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <AppTheme>{children}</AppTheme>
      </body>
    </html>
  );
}
