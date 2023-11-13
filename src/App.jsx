/* eslint-disable space-before-function-paren */
import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

export default function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  const fetchCatFactAndImage = () => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data

        const threeFirstWords = fact.split(' ', 3).join(' ')
        const CAT_ENDPOINT_IMAGE_URL = `${CAT_PREFIX_IMAGE_URL}${threeFirstWords}?fontColor=white`

        setFact(fact)
        setImageUrl(CAT_ENDPOINT_IMAGE_URL)
      })
  }

  // useEffect(() => {}, [])
  useEffect(() => {
    fetchCatFactAndImage()
  }, [])

  return (
    <div>
      <h1>Funny facts about cats 😸</h1>
      {fact && imageUrl && (
        <>
          <p>{fact}</p>
          <img
            src={imageUrl}
            alt={`Image extracted using the first three words for ${fact}`}
          />
        </>
      )}
      <button onClick={fetchCatFactAndImage}>Refresh</button>
    </div>
  )
}
