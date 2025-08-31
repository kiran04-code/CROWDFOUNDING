"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { abi } from "./ContarctAbi";
import { ethers } from "ethers";
const ContractContext = createContext(null);

export const ContractContextProvider = ({ children }) => {
    const [accounts, setAccount] = useState("None")
    const [Contarct, setContarct] = useState()
    const ContarctAddress = "0x0C6fD424c9d4E70CC1Bd8Fea02715B6768263779";
    const getconnted = async () => {
        if (window.ethereum) {
            const account = await window.ethereum.request({ method: "eth_requestAccounts" })
            console.log("ConnectedAccount", account[0])
            setAccount(account[0])
        } else {
            alert("You Need to Insstall Meta Mask")
        }
    }
    useEffect(() => {
        const Connection = async () => {
            const provider = new ethers.BrowserProvider(window.ethereum)
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(ContarctAddress, abi, signer)
            setContarct(contract)
            console.log("Availble Contarct:", contract)
        }
        Connection()
    }, [accounts])

    return < ContractContext.Provider value={{ accounts, Contarct,getconnted }}>
        {children}
    </ContractContext.Provider >

}

export const useContarct = () => {
    return useContext(ContractContext)
}
