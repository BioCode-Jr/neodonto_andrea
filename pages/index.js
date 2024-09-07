
import localFont from "next/font/local";

const TT_Norms_Pro_Regular = localFont({
  src: "./fonts/TT_Norms_Pro_Regular.otf",
  variable: "--font-tt-norms-pro-regular",
  weight: "100 900",
});

const TT_Norms_Pro_Bold = localFont({
  src: "./fonts/TT_Norms_Pro_Bold.otf",
  variable: "--font-tt-norms-pro-bold",
  weight: "100 900",
});

const TT_Norms_Pro_Medium = localFont({
  src: "./fonts/TT_Norms_Pro_Medium.otf",
  variable: "--font-tt-norms-pro-medium",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${TT_Norms_Pro_Regular.variable}  flex min-h-screen font-[family-name:var(--font-tt-norms-pro-regular)]`}
    >
      rweere
    </div>
  );
}
