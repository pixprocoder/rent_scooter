import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

export function ToggleNavbar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <GiHamburgerMenu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/car">Cars</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/service">Service</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/service">About</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/contact">Contact Us</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="">
              <Button>SIGN UP</Button>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
