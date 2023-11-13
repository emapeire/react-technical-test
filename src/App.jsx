/* eslint-disable space-before-function-paren */
import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

export default function App() {
  const [isFact, setIsFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  const fetchCatFactAndImage = () => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Something went wrong')
        }
        return res.json()
      })
      .then((data) => {
        const { fact } = data

        const threeFirstWords = fact.split(' ', 3).join(' ')
        const CAT_ENDPOINT_IMAGE_URL = `${CAT_PREFIX_IMAGE_URL}${threeFirstWords}?fontColor=white`

        setIsFact(fact)
        setImageUrl(CAT_ENDPOINT_IMAGE_URL)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  // useEffect(() => {}, [])
  useEffect(() => {
    fetchCatFactAndImage()
  }, [])

  return (
    <div>
      <h1>Funny facts about cats 😸</h1>
      {isFact && imageUrl && (
        <>
          <p>{isFact}</p>
          <img
            src={imageUrl}
            alt={`Image extracted using the first three words for ${isFact}`}
          />
        </>
      )}
      <button onClick={fetchCatFactAndImage}>Refresh</button>
    </div>
  )
}
