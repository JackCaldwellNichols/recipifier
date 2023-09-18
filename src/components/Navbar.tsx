"use client";
import React, { useContext } from "react";
import Menu from "./Menu";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: session, status } = useSession();

  const handleClick = () => {
    signOut();
  };
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
      <div className="hidden md:flex gap-4 flex-1 justify-end items-center">
        {status === "authenticated" ? (
          <Link href="/profile">
            <Image
              src={session?.user?.image ?? ""}
              alt=""
              width={50}
              height={50}
              className="rounded-full border-2 border-white"
            />
          </Link>
        ) : null}
        {status !== "authenticated" ? (
          <Link href="/login">Login</Link>
        ) : (
          <span onClick={handleClick} className="cursor-pointer">
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
