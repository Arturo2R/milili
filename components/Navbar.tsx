"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import {
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

type Props = {};

const Navbar = (props: Props) => {
	return (
		<header className="z-20 py-4 w-full margen cool dark:bg-indigo-950 bg-purple-100/50">
			<div className="flex justify-between">
				<Link href="/">
					<h2 className="my-auto">Logo</h2>
				</Link>

				<NavigationMenu>
					<NavigationMenuList>
						<NavList
							title="Uno"
							links={[
								{ name: "habla", to: "/habla" },
								{ name: "habla", to: "/habla" },
							]}
						/>

						<NavList
							title="Dos"
							links={[
								{ name: "habla", to: "/habla" },
								{ name: "habla", to: "/habla" },
							]}
						/>
						<NavList
							title="Tres"
							links={[
								{ name: "habla", to: "/habla" },
								{ name: "habla", to: "/habla" },
							]}
						/>
						{/* <span className="my-auto">Carrito</span> */}
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</header>
	);
};

export default Navbar;

interface LinkListProps {
	title: string;
	links: { name: string; to: string }[];
}

const NavList = (props: LinkListProps) => {
	return (
		<NavigationMenuItem>
			<NavigationMenuTrigger>{props.title}</NavigationMenuTrigger>
			<NavigationMenuContent>
				<ul className="flex flex-col p-4 w-400">
					{props.links.map((link, id) => (
						<NavLink key={id} to={link.to} name={link.name}></NavLink>
					))}
				</ul>
			</NavigationMenuContent>
		</NavigationMenuItem>
	);
};

const NavLink = (props: { name: string; to: string }) => {
	return (
		<Link
			className="block p-3 space-y-1 leading-none no-underline rounded-md transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
			href={props.to}
			legacyBehavior
			passHref
		>
			<NavigationMenuLink className={navigationMenuTriggerStyle()}>
				{props.name}
			</NavigationMenuLink>
		</Link>
	);
};

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block p-3 space-y-1 leading-none no-underline rounded-md transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
