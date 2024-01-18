"use client"
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data } = useSession();
  console.log(data);

  return (
    <div>
        <p> { data?.user?.email } </p>
    </div>
  )
}