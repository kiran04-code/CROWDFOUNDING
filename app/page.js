"use client";
import { Footer, Navbar } from "@/components";
import Card from "@/components/Card";
import HeroSection from "@/components/HeroSection";
import PopUP from "@/components/PopUP";
import { useContarct } from "@/context/contract";
import { Contract, ethers } from "ethers";
import { useState } from "react";

export default function Home() {
  const { opneOpup, setopnepopup } = useContarct();
 
  return (
    <div>
      {/* <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8  gap-16 sm:p-20">
         <div className="bg-white border-l-4 border-purple-700 text-black p-4 rounded-2xl my-4">
          <h1 className="text-lg font-semibold">
            ⚠️ Note: If you are using this platform, please use MetaMask with the{" "}
            <span className="font-bold">Sepolia Testnet</span> for interaction
            with this platform!
          </h1>
        </div> 
      
      </div> */}
  <HeroSection />
      {/* All Campaigns */}
      <div className="p-10 ">
        <h1 className="md:text-2xl text-xl font-semibold">All Campaigns</h1>
        
          <Card />
        
      </div>

      {/* Your Campaigns */}
      <div className="p-10 ">
        <h1 className="md:text-2xl text-xl font-semibold">Your Campaigns</h1>
        <Card/>
      </div>
      {
        opneOpup && (
          <PopUP
           setopnepopup={setopnepopup}
          />
        )
      }
    </div>
  );
}
