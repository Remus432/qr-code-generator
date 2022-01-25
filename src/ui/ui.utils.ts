import type { IGenerateCode, ISendURL, IScrapPageInfo } from "./ui.interfaces"

export const scrapPageInfo: IScrapPageInfo = async () => {
  const res = await fetch("https://node-scrapper-qr.herokuapp.com/data", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  })
  const info = await res.json()

  return {
    screenshot: info[0].screenshot,
    description: info[0].description,
    headline: info[0].headline,
    title: info[0].title
  }
}

export const sendURL: ISendURL = async (url) => {
  await fetch("https://node-scrapper-qr.herokuapp.com/data", { 
    method: "POST",
    mode: "cors", 
    headers: { 
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }, 
    body: JSON.stringify({ url })
  })
}


export const generateCode: IGenerateCode = async (urlVal, httpPattern) => {
  !urlVal.includes("https://") ? httpPattern = "https://" : httpPattern = ""

  return {
    img: `https://api.qrserver.com/v1/create-qr-code/?data=${httpPattern}${urlVal}&size=200x200&bgcolor=2C7DFA&color=fff&format=svg`,
    url: `${httpPattern}${urlVal}`
  }
}
