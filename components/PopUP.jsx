"use client"
import { useContarct } from '@/context/contract';
import React, { useState } from 'react'

const PopUP = ({ setopnepopup }) => {

    const [amount,setamount] = useState()
    const { accounts, Contract } = useContarct()
    console.log(amount)
    const Donated = async (ammout) => {
        const donated = await Contract.donateToCampaign(accounts, {
            value: ethers.parseEther(ammout),
        });
        await donated.wait();
        location.reload();
        return donated;
    };
    const getDonation = async () => {
        const donations = await Contract.getDonors(accounts);
        const NumberOfDonter = donations[0].length;
        const ParsedDonation = [];
        for (let i = 0; i < NumberOfDonter; i++) {
            ParsedDonation.push({
                donors: donations[0][i],
                donations: ethers.formatEther(donations[1][i].toString()),
            });
        }
        return ParsedDonation;
    };
    return (
        <div
  className="fixed z-60 top-0 left-0 right-0 h-screen w-full flex flex-col justify-center items-center bg-[#00000081]"
  onClick={() => setopnepopup(false)}
>
  <form
    onClick={(e) => e.stopPropagation()}
    className="bg-white rounded-2xl shadow-lg p-6 w-80 flex flex-col gap-4"
  >
    <input
      type="text"
      placeholder="Enter amount...In Ether"
      onChange={(e)=>setamount(e.target.value)}
      value={amount}
      className="p-3 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-[#6210a5]"
    />

    {/* Wallet Address */}
    <p className="text-xs text-gray-600 break-words bg-gray-100 p-2 rounded-xl">
      0x5454fwefgewjfnweflw5435w6ef4wef
    </p>

    {/* Button */}
    <button
      type="submit"
      className="bg-[#6210a5] text-white py-2 rounded-xl font-semibold hover:bg-[#4b0c80] transition"
    >
      Pay
    </button>
  </form>
</div>

    )
}

export default PopUP
