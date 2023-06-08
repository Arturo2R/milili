import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
	other: boolean;
	gradient?: boolean;
};

const ProductCard = ({ other, gradient }: Props) => {
	gradient ||= false;
	return (
		<Link href="/categoria">
			<div className="z-10 w-full bg-white rounded-lg border-2 border-purple-300 shadow-md transition-shadow duration-200 ease-in dark:bg-violet-900 hover:shadow-xl hover:shadow-purple-600 dark:hover:shadow-purple-800">
				<div
					className={cn("z-0 w-full h-56", {
						"cool-gradient": other && gradient,
						"bg-gradient-to-br from-violet-600  to-green-rose-200":
							!other && gradient,
						"bg-white": !gradient,
					})}
				></div>
				<div className="p-3">
					<h4 className="mb-2 font-semibold font-xl">Nombre del Producto</h4>
					<div className="flex justify-between">
						<p className="text-xs">
							descripción o cualquier cosa sobre el producto
						</p>
						<span className="text-3xl font-medium">99€</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
