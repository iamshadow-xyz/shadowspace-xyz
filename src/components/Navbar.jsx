import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <div className="w-full h-16 md:h-20 flex justify-between items-center">
      {/* logo */}
      <Link to="/">
        <div className="flex items-center font-bold text-2xl gap-4">
          <Image
            src="logo.png"
            className="rounded-sm"
            width={30}
            height={30}
            alt="logo"
          />
          <span>Shadowspace</span>
        </div>
      </Link>

      {/* mobiles */}
      <div className="md:hidden flex items-center gap-8">
        <div
          className="cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <HiX size={25} /> : <HiMenuAlt3 size={25} />}
        </div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        {open && (
          <div
            className="w-full h-screen flex flex-col items-center gap-8 font-medium justify-center absolute top-16 right-0 bg-zinc-950 backdrop-blur-lg transition-all ease-in-out"
            onClick={handleClick}
          >
            <Link to="/create">Create</Link>
            <Link to="trending">Trending</Link>
            <Link to="/popular">Most Popular</Link>
            <Link to="/about">About</Link>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        )}
      </div>

      {/* desktop */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/create">Create</Link>
        <Link to="trending">Trending</Link>
        <Link to="/popular">Most Popular</Link>
        <Link to="/about">About</Link>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
