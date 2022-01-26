import type { IGenerateCode, ISendURL, IScrapPageInfo, ITruncateText } from "./ui.interfaces"

export const truncateText: ITruncateText = (text) => {
  text && (text.length > 150) && `${text.substring(0, 150)} &hellip;`
  return text
}

export const scrapPageInfo: IScrapPageInfo = async () => {
  const res = await fetch("https://node-scrapper-qr.herokuapp.com/data", {
    method: "GET",
    mode: "cors",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  })

  const info = await res.json()

  return {
    screenshot: info[0].screenshot,
    description: truncateText(info[0].description),
    headline: truncateText(info[0].headline),
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
    img: `https://api.qrserver.com/v1/create-qr-code/?data=${httpPattern}${urlVal}&size=200x200&bgcolor=2C7DFA&color=fff&format=png`,
    url: `${httpPattern}${urlVal}`
  }
}
