import React from "react";
import Menu from "./Menu";
import Link from "next/link";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 bg-[#94A684] text-white p-4 flex justify-between items-center  uppercase md:h-24 lg:p-20 xl:p-20">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/search">Search</Link>
      </div>

      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Recípifier</Link>
      </div>

      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 flex-1 justify-end">
        {user && <Link href="/profile">Profile</Link>}
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/">Logout</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
