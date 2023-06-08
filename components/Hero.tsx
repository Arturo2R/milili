"use client";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { animate } from "motion";

type Props = {};

const Hero = (props: Props) => {
	return (
		<header id="hear" className=" margen pink-gradient h-[60vh]">
			<div className="absolute right-20 top-[18vh] w-[286px]">
				<ProductCard />
			</div>
		</header>
	);
};

export default Hero;
