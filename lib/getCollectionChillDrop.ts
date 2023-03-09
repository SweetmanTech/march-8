import { Contract } from "ethers"
import abi from "@lib/ERC721Drop-abi.json"
import metadataRendererAbi from "@lib/MetadataRenderer-abi.json"
import { ipfsImage } from "./helpers"
import axios from "axios"
import getErc721Drop from "./getErc721Drop"

const getCollectionChillDrop = async (contractAddress: string, provider: any) => {
    const contract = new Contract(contractAddress, abi, provider)

    console.log("getting metadata renderer...")

    const metadataRendererAddress = await contract.metadataRenderer()
    console.log("metadataRendererAddress", metadataRendererAddress)
    const metadataRenderer = new Contract(
      metadataRendererAddress,
      metadataRendererAbi,
      provider
    )
    const base = await metadataRenderer.metadataBaseByContract(contractAddress.toString())
    console.log("base", base)
    const uri = base.base
    const metadataURI = ipfsImage(uri)
    console.log("metadataURI", metadataURI)

    const { data: metadata } = await axios.get(metadataURI)

    const salesConfig = await contract.salesConfig()
    const price = salesConfig.publicSalePrice
    const maxSalePurchasePerAddress = salesConfig.maxSalePurchasePerAddress
    const totalSupply = await contract.totalSupply()
    const config = await contract.config()
    const maxSupply = config.editionSize

    const erc721Drop = getErc721Drop(
      {contractAddress,
      metadata,
      price,
      maxSalePurchasePerAddress,
      totalSupply,
      maxSupply}
    )
    return erc721Drop
}

export default getCollectionChillDrop