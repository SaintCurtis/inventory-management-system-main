import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="/"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Inventory management software for Samaco & son's Investment.
        </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">
        Increasing sales and keeping track of every unit with our powerful
          stock management, order fulfillment, and inventory control software.
        </p>
       
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©2024{" "}
          <a href="#" className="hover:underline">
            Inventory™
          </a>
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
