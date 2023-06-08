import { Cart } from "@/components/Cart";
import { Button } from "@/components/ui/button";
type Props = {};

const PaginaProducto = (props: Props) => {
	return (
		<main>
			<div className="flex py-10 margen cool-gradient">
				<div id="granImage" className="basis-2/3">
					<div className="mx-auto w-3/5 h-full bg-white rounded-md"></div>
				</div>
				<div className="left-4 p-10 bg-white rounded-md basis-1/3 w-fit h-fit">
					<h1 className="text-2xl font-semibold">Producto 1</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
						velit eos suscipit perferendis ipsum quisquam quo porro labore,
						delectus iusto consectetur sint animi, beatae nam? Pariatur, vero.
						Asperiores, temporibus nemo.
					</p>
					<p className="mt-4 mb-2 font-semibold">Colores</p>
					<div className="flex space-x-4 w-full h-14">
						<div className="w-full h-full bg-purple-400 rounded-md"></div>
						<div className="w-full h-full bg-purple-400 rounded-md"></div>
						<div className="w-full h-full bg-purple-400 rounded-md"></div>
						<div className="w-full h-full bg-purple-400 rounded-md"></div>
					</div>

					<div className="flex mt-4 w-full">
						<span className="mr-auto ml-auto text-3xl font-semibold">99€</span>
					</div>

					<Cart>
						<Button className="mx-auto mt-4" variant={"buy"}>
							Comprar/Enviar al carrito
						</Button>
					</Cart>
				</div>
			</div>
		</main>
	);
};

export default PaginaProducto;
