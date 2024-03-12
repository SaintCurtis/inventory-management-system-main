import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";


export default function SubscriptionCard() {
  const { data: session} = useSession();
  const username = session?.user?.name.split(" ")[0] ?? ""; 
  return (
    
    <div className="px-1 py-3">
      <div className="rounded-lg p-3  bg-slate-900">
        <div className="border-b border-slate-600 pb-3">
          <p className="text-sm border-l-2 border-orange-400 pl-2">
            Welcome to the Samaco & Son's Investment's Inventory App{" "}
            <span className="text-orange-400 ">{username}</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
