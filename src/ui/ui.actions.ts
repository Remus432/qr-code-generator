import { generateCode, sendURL, scrapPageInfo } from "./ui.utils"
import type { IRetrieveInfoObj } from "./ui.interfaces"

export const retrieveInfoObj: IRetrieveInfoObj = async (url) => {
  const qrAPI = await generateCode(url, "")
  await sendURL(qrAPI.url)
  
  let pageInfoObj = await scrapPageInfo()

  return  { 
    page: {...pageInfoObj}, 
    img: qrAPI.img,
    isLoading: false
  }
} 