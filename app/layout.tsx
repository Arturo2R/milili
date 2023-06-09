import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Milili Crochet",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body
				className={
					inter.className +
					" bg-purple-100/30 dark:bg-slate-950 dark:text-purple-50"
				}
			>
				<Navbar />

				{children}
				<Footer />
			</body>
		</html>
	);
}
