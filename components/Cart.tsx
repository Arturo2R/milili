import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import React, { ReactNode } from "react";

interface CartProps {
	children: ReactNode;
}

export function Cart(props: CartProps) {
	return (
		<Sheet>
			<SheetTrigger asChild>{props.children}</SheetTrigger>
			<SheetContent
				position="right"
				size="content"
				className="flex flex-col justify-between"
			>
				<SheetHeader>
					<SheetTitle>Carrito</SheetTitle>
					<SheetDescription>I have made a mistake</SheetDescription>
				</SheetHeader>
				<div className="grid gap-4 py-4">fdadl</div>
				<SheetFooter>
					<SheetClose asChild>
						<Button type="submit" variant="buy">
							Save changes
						</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
