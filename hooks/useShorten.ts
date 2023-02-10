import axios from 'axios'
import { useState } from 'react'
import { IShortenItem } from '../types'

export const useShorten = () => {
  const [shortenedItem, setShortenedItem] = useState<IShortenItem>({
    url: 'www.google.com.tr',
    shortenedLink: 'https://shrtco.de/jPLTQs',
  })

  const fetchData = async (userInput: string) => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      )
      if (response && response.data) {
        setShortenedItem({
          url: userInput,
          shortenedLink: response.data.result.full_short_link,
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  return { shortenedItem, fetchData }
}
