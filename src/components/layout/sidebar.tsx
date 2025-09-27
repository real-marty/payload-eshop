import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type NavbarItems = {
  href: string;
  label: string;
};

type Props = {
  items: NavbarItems[];
  open: boolean;
  onChange: (open: boolean) => void;
};

export const Sidebar = ({ items, open, onChange }: Props) => {
  return (
    <Sheet open={open} onOpenChange={onChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle className=" text-xl font-semibold font-display ">
              Menu
            </SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2 w-full">
          {items.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className="w-full justify-start rounded-none px-4 py-4 font-medium text-foreground hover:text-foreground hover:bg-primary/5 transition-colors duration-200"
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </ScrollArea>
        <div className="border-t mt-auto justify-center text-center h-16 flex w-full">
          <Button
            asChild
            variant="ghost"
            className="w-1/2 h-full uppercase flex items-center justify-center text-center  rounded-none font-medium transition-colors duration-200 hover:bg-primary/20"
          >
            <Link href={"/sign-in"}>Sign In</Link>
          </Button>

          <Button
            asChild
            variant="default"
            className="w-1/2 h-full uppercase flex items-center justify-center text-center  rounded-none font-medium bg-primary hover:bg-primary transition-colors duration-200 hover:text-secondary/80"
          >
            <Link href={"/sign-up"}>Start Selling</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
