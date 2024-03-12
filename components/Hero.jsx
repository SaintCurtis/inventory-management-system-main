import React from "react";
import ThemeLink from "./ThemeLink";
import mockup from "../public/mockup.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default function Hero() {
  const session = getServerSession(authOptions);
  
  return (
    <div className="bg-gradient-to-b from-blue-900 flex flex-col py-8 md:py-32 px-4 md:px-16 text-slate-50 items-center gap-6">
      <div className="flex flex-col space-y-8 items-center max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Inventory management software for Samaco & son's Investment.
        </h2>
        <p className="text-base md:text-xl">
          Increasing sales and keeping track of every unit with our powerful
          stock management, order fulfillment, and inventory control software.
        </p>

        <div className="py-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
          {session ? (
            <ThemeLink
              className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-300 text-white md:w-auto w-full"
              title="View Dashboard"
              href="/dashboard/home/overview"
              icon={AiOutlineArrowDown}
            />
          ) : (
            <ThemeLink
              className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-300 text-white md:w-auto w-full"
              title="Access the Inventory System"
              href="/dashboard/home/overview"
              icon={AiOutlineArrowDown}
            />
          )}
        </div>
      </div>
      <div className="mt-4 md:mt-0">
        <Image src={mockup} alt="Inventory App" />
      </div>
    </div>
  );
}
