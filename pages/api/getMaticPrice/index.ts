import axios from "axios";

export default async function handler(req: any, res: any) {
    const {data} = await getMaticPrice()
    res.status(200).json(data)
}

const getMaticPrice = async () => {
    let response;
    try {
      response = await axios.get(
        "https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USD",
        {
          headers: {
            "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY || "1b23d28e-e5eb-49be-8c69-cee5ebe86bb9",
          },
        }
      );
    } catch (ex) {
      response = {data: false};
      // error
      console.error(ex);
    }
    return response;
};