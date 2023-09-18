"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/");
  }

  console.log(session.status);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const email = e.target[0].value;
  //   const password = e.target[1].value;

  //   try {
  //     signIn("credentials", { email, password });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h[calc(100vh-9rem)] flex items-center justify-center">
      <div className="h-full shadow-2xl flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] xl:w-[50%]">
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image
            src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl  xl:text-3xl">Welcome</h1>
          <p>Log in to your account</p>
          <button
            className="flex gap-4 p-4 ring-1 ring-green-100 rounded-md"
            onClick={() => {
              signIn("google");
            }}
          >
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign In With Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign In With Facebook</span>
          </button>
          <p className="text-sm">
            Have a problem?{" "}
            <Link href="/" className="underline">
              Contact us.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
