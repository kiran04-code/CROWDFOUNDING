"use client"

import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Small from './loder/small'
import { useContarct } from '@/context/contract'
import Image from 'next/image'
import { Wifi } from 'lucide-react'
import { ethers } from 'ethers'

const HeroSection = () => {
  const [loder, setloder] = useState(false)
  const { Contarct, accounts } = useContarct()
  console.log(accounts)
  const [from, setfrom] = useState({
    description: "",
    title: "",
    amount: "",
    dedline: ""
  })
  const Handleonchnage = (e) => {
    const { name, value } = e.target
    setfrom({ ...from, [name]: value })
  }
  const createCampoaigns = async (e) => {
    setloder(true)
    e.preventDefault();
    console.log("fromData", from)
    if (!from.amount || !from.dedline || !from.title || !from.description) {
      setloder(false)
      return toast.error("Please fill all details");
    }
    try {
      setloder(true)
     
      const target = ethers.parseEther(from.amount.toString());
      const trasition = await Contarct.createCampaign(
        from.title,
        accounts,
        from.description,
        target,
        new Date(from.dedline).getTime()
      )
      console.log("Transaction sent:", trasition);
      await trasition.wait()
      console.log(trasition)
      toast.success("Campaign Create Successfully")
      setloder(false)
      location.reload()
      setfrom({ title: "", dedline: "", description: "", amount: "" })
    } catch (error) {
      console.log(error)
      toast.error("Something is Issue To Create Campaign")
      setloder(false)
    }
  }
  return (
    <div className='w-full   md:flex md:px-15 md:justify-between flex flex-col  md:flex-row  gap-5 p-5 md:mt-5 '>
      <div className=" max-w-2xl relative ">
        <div className='flex relative '>
          <Image
            src="/mk2-removebg-preview.png"
            width={250}
            height={250}
            alt="Hero Illustration"
            className="rounded-2xl w-25 h-25 "
          />
          <Wifi className='w-10 absolute  rotate-90 left-15 top-9 text-purple-500 ' />
          <p className="mt-4 text-[10px] md:text-[1.2vw] bg-purple-600 text-white p-2 rounded-2xl">
            Join a decentralized platform where dreamers meet backers.
            Launch campaigns, raise funds securely, and make innovation unstoppable.
          </p>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 leading-tight">
          Empower Ideas with <span className="text-[#6210a5] underline decoration-6 decoration-[#FF961C]">Blockchain Crowdfunding</span>
        </h1>
        <p className='text-xl' > With <span className='text-[#6210a5]'>0%</span> <span className='  underline-offset-4 decoration-2 underline  decoration-purple-700'>platform fee</span>, you can raise funds <span className='underline  underline-offset-4 decoration-purple-700 decoration-2'>too!</span></p>

        {/* Subtitle */}
        <div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="bg-[#6210a5] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#4b0c80] transition">
            🚀 Start a Campaign
          </button>
          <button className="border border-[#6210a5] text-[#6210a5] px-6 py-3 rounded-xl font-semibold hover:bg-[#6210a5] hover:text-white transition">
            🌍 Explore Campaigns
          </button>
          <div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className=''>
        <form onSubmit={createCampoaigns} className="bg-white rounded-2xl shadow-lg p-6 md:w-80  gap-4 flex flex-col">
          <input
            type="text"
            name='title'
            placeholder="Enter Title"
            onChange={Handleonchnage}
            value={from.title}
            className="p-3 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-[#6210a5]"
          />
          <input
            type="text"
            name='description'
            placeholder="Enter Description.."
            onChange={Handleonchnage}
            value={from.description}
            className="p-3 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-[#6210a5]"
          />
          <input
            type="text"
            name='amount'
            placeholder="Enter Target Ammount.."
            onChange={Handleonchnage}
            value={from.amount}
            className="p-3 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-[#6210a5]"
          />
          <input
            type="date"
            name='dedline'
            placeholder="Enter deadline.."
            onChange={Handleonchnage}

            className="p-3 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-[#6210a5]"
          />
          <button
            type="submit"
            className="bg-[#6210a5] text-white py-2 rounded-xl font-semibold hover:bg-[#4b0c80] transition"
          >
            {
              loder ? <Small /> : "create Campaign"
            }
          </button>
        </form>
      </div>
    </div>
  )
}

export default HeroSection
