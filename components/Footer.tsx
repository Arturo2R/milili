import React from "react";

type Props = {};

const Footer = (props: Props) => {
	return (
		<footer className="py-8 mt-8 w-full bg-purple-100 dark:bg-transparent margen">
			<div className="flex justify-between">
				<div className="flex-col">
					<h4 className="text-xl font-semibold text-purple-700">
						Información De Contacto
					</h4>
					<ul>
						<li>Info</li>
						<li>Info</li>
						<li>Info</li>
						<li>Info</li>
					</ul>
				</div>
				<div className="flex-col" id="categorias">
					<h4 className="text-xl font-semibold text-purple-700">Products</h4>
					<p>categoria</p>
					<p>categoria</p>
					<p>categoria</p>
					<p>categoria</p>
					<p>categoria</p>
					<p>categoria</p>
				</div>
				<div className="flex-col" id="masVendidos">
					<h4 className="text-xl font-semibold text-purple-700">
						Mas vendidos
					</h4>
					<p>producto</p>
					<p>producto</p>
					<p>producto</p>
					<p>producto</p>
					<p>producto</p>
					<p>producto</p>
				</div>
				<div id="Logo" className="w-1/3 text-xl">
					Logosote
				</div>
			</div>
			<div className="flex justify-between">
				<span>Logos tarjetas</span>
				<p>Logo del creador</p>
			</div>
		</footer>
	);
};

export default Footer;
