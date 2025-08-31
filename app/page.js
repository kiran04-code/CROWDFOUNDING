"use client"
import { Footer, Navbar } from "@/components";
import HeroSection from "@/components/HeroSection";
import { useContarct } from "@/context/contract";
import { Contract, ethers } from "ethers";
import { useState } from "react";
export default function Home() {
  const { accounts, Contarct } = useContarct()
  const GetEntairData = async () => {
    const getAllCampain = await Contarct.getCampaigns()
    const partseCampign = getAllCampain.map((cam, i) => ({
      Owner: cam.Owner,
      title: cam.title,
      description: cam.description,
      target: ethers.formatEther(cam.target),
      deadline: cam.deadline,
      amountCollected: cam.amountCollected
    }), pId = i)
    return partseCampign
  }
  let getUserCampaign = async () => {
    const getAllCampain = await Contarct.getCampaigns()
    const FilterCampin = getAllCampain.filter((camp) => {
      camp.Owner === accounts
    })
    const YourOwnCampaign = FilterCampin.map((cam, i) => ({
      Owner: cam.Owner,
      title: cam.title,
      description: cam.description,
      target: ethers.formatEther(cam.target),
      deadline: cam.deadline,
      amountCollected: cam.amountCollected
    }), pId = i)
    return YourOwnCampaign
  }
  const Donated = async (ammout) => {
    const donated = await Contract.donateToCampaign(accounts, { value: ethers.parseEther(ammout) })
    await donated.wait()
    location.reload()
    return donated()
  }

  const getDonation = async () => {
    const donations = await Contract.getDonors(accounts)
    const NumberOfDonter = donations[0].length;
    const ParsedDonation = []
    for (let i = 0; i < NumberOfDonter; i++) {
      ParsedDonation.push({
        donors: donations[0][i],
        donations: ethers.formatEther(donations[1][i].toString())
      })
    }
    return ParsedDonation;
  }
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="bg-[#fff] border-l-4 border-purple-700 text-black p-4 rounded-2xl my-4">
        <h1 className="text-lg font-semibold">
          ⚠️ Note: If you are using this platform, please use MetaMask with the <span class="font-bold">Sepolia Testnet</span> For Interaction with This PlatFrom!.
        </h1>
      </div>
      <HeroSection/>
    </div>
  );
}
