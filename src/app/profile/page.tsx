"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  return (
    <div>
      <div>
        <h1>Hi there, {session?.user?.name}</h1>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
