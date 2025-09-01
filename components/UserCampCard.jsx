import { useContarct } from '@/context/contract';
import React from 'react'

const UserCampCard = () => {
const {Contarct,setopnepopup} = useContarct()
    const getUserCampaign = async () => {
        const getAllCampain = await Contarct.getCampaigns();
        const FilterCampin = getAllCampain.filter(
          (camp) => camp.Owner === accounts
        );
        return FilterCampin.map((cam, i) => ({
          pId: i,
          Owner: cam.Owner,
          title: cam.title,
          description: cam.description,
          target: ethers.formatEther(cam.target),
          deadline: cam.deadline,
          amountCollected: cam.amountCollected,
        }));
      };
  return (
  <div className='h-screen w-full'>
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition" onClick={()=>setopnepopup(true)} >
      {/* Image */}
      <img
        className="w-full h-48 object-cover"
        src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
        alt="Product"
      />

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">Stylish Sunglasses</h2>
        <p className="text-gray-600 mt-2 text-sm">
          Protect your eyes in style with these premium UV-blocking sunglasses.
          Lightweight, durable, and perfect for all-day comfort.
        </p>

        {/* Price */}
        <p className="mt-3 text-indigo-600 font-semibold text-lg">0 ETH</p>
      </div>
    </div>
   </div>
  )
}

export default UserCampCard
