import Hero from "@/components/Hero";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import CategoriesAndProducts from "@/components/CategoriesAndProducts";
import Image from "next/image";

export default function Home() {
	return (
		<main className="">
			<Hero />
			<About />
			<CategoriesAndProducts />
		</main>
	);
}
