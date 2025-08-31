"use client"

import React, { useState } from 'react'

const HeroSection = () => {
    const [from, setfrom] = useState({
        description: "",
        title: "",
        amount: "",
        deadline: ""
      })
     
      const createCampoaigns = async (e) => {
        e.preventDefault()
        console.log("fromData",from)
        try {
          const { description, title, amount, deadline } = from;
          const trasition = await Contract.createCampoaign({
            description,
            title,
            amount: { value: ethers.formatEther(Number(amount)) },
            deadline: new Date(deadline).getTime()
          })
          await trasition.wait()
          console.log("Campaign CreateedSucessFull!")
          location.reload()
        } catch (error) {
          console.log(error)
        }
      }
    
  return (
    <div>
      <h1>Herosection</h1>
    </div>
  )
}

export default HeroSection
