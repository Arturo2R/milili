import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./ProductCard";

type Props = {};

const CategoriesAndProducts = (props: Props) => {
	return (
		<section className="my-5 margen">
			<Tabs defaultValue="Categoria1" className="w-full">
				<TabsList>
					<TabsTrigger value="Categoria1">Categoria1</TabsTrigger>
					<TabsTrigger value="Categoria2">Categoria2</TabsTrigger>
				</TabsList>
				<TabsContent value="Categoria1">
					<div className="grid grid-cols-4 grid-flow-row gap-y-6 gap-x-12 w-full">
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
					</div>
				</TabsContent>
				<TabsContent value="Categoria2">
					<div className="grid grid-cols-4 grid-flow-row gap-y-6 gap-x-12 w-full">
						<ProductCard other />
						<ProductCard other />
						<ProductCard other />
						<ProductCard other />
						<ProductCard other />
						<ProductCard other />
						<ProductCard other />
						<ProductCard other />
						<ProductCard other />
						<ProductCard other />
						<ProductCard other />
						<ProductCard other />
						<ProductCard other />
						<ProductCard other />
						<ProductCard other />
						<ProductCard other />
						<ProductCard other />
						<ProductCard other />
					</div>
				</TabsContent>
			</Tabs>
		</section>
	);
};

export default CategoriesAndProducts;
