import { useContarct } from '@/context/contract';
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const Card = () => {
    const { Contarct, setopnepopup } = useContarct();
    const [campaignArry, setcampinArr] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            if (!Contarct) {
                console.error("Contract not initialized yet");
                return;
            }

            try {
                const campaigns = await Contarct.getCampaigns();
                const formatted = campaigns.map((cam, i) => ({
                    pId: i,
                    Owner: cam.Owner,
                    title: cam.title,
                    description: cam.description,
                    target: ethers.formatEther(cam.target),
                    deadline: cam.deadline,
                    amountCollected: cam.amountCollected,
                }));

                console.log(formatted);
                setcampinArr(formatted)
            } catch (err) {
                console.error("Error fetching campaigns:", err);
            }
        };

        fetchData();
    }, [Contarct]);

    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full px-4 mt-5">
            {campaignArry.map((data, i) => (
                <div
                    key={i}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl  cursor-pointer"
                    onClick={() => setopnepopup(true)}
                >
                    {/* Image */}
                    <img
                        className="w-full h-48 object-cover"
                        src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
                        alt="Campaign"
                    />

                    {/* Content */}
                    <div className="p-5">
                        <h2 className="text-lg font-semibold text-white bg-[#3e2183] p-2 rounded-t-md truncate">
                            {data.title}
                        </h2>
                        <p className="text-gray-700 mt-2 text-sm h-16 overflow-hidden">{data.description}</p>

                        {/* Target */}
                        <span className=" mt-4 text-white font-semibold bg-[#3e2183] px-3 py-1 rounded-b-md ">
                            {data.target} ETH
                        </span>
                    </div>
                </div>
            ))}
        </div>



    );
};

export default Card;
