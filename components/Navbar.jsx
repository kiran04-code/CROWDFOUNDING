"use client";
import React, { useState } from "react";
import { Menu, X, Wallet } from "lucide-react"; // icons
import { useContarct } from "@/context/contract";
import Image from "next/image";

const Navbar = () => {
  const { getconnted, accounts } = useContarct()
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full  shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex justify-center items-center">
          <Image  src={"/crowdfunding(1).png"} width={250} height={250} alt="" className="w-10 h-10 bg-white rounded-full"/>
          <h1 className="text-2xl font-extrabold text-[#ffffff] tracking-wide  px-4 py-1 rounded-2xl flex justify-center items-center text-center">
          
          CrowdFunding
        </h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-100 font-medium">
          <li className="hover:text-purple-700 cursor-pointer transition">
            White Paper
          </li>
          <li className="hover:text-purple-700 cursor-pointer transition">
            Donation
          </li>
          <li className="hover:text-purple-700 cursor-pointer transition">
            Members
          </li>
        </ul>
        {/* Right: Wallet Button (Desktop) */}
        <div className="hidden md:block">
          <p>
            {accounts === "None" ? (
              <button
                onClick={getconnted}
                className="flex items-center gap-2 bg-[#540688] text-white px-5 py-2 rounded-xl font-semibold shadow-md  hover:shadow-lg transition transform duration-200"
              >
                <Wallet size={18} /> Connect Wallet
              </button>
            ) : (
              <span className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl text-sm font-medium text-gray-800 shadow-inner">
                <Wallet size={16} className="text-purple-700" />
                My Account:
                <span className="font-semibold text-purple-700">
                  {accounts.slice(0, 6)}...{accounts.slice(-4)}
                </span>
              </span>
            )}
          </p>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-4 text-gray-100 font-medium px-2">
          <p className="hover:text-blue-600 cursor-pointer transition">
            White Paper
          </p>
          <p className="hover:text-blue-600 cursor-pointer transition">
            Donation
          </p>
          <p className="hover:text-blue-600 cursor-pointer transition">
            Members
          </p>
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition">
            <Wallet size={18} /> Connect Wallet
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
