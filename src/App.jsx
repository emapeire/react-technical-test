/* eslint-disable space-before-function-paren */
import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

export default function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // useEffect(() => {}, [])
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)

        const threeFirstWords = fact.split(' ', 3).join(' ')
        const CAT_ENDPOINT_IMAGE_URL = `${CAT_PREFIX_IMAGE_URL}${threeFirstWords}`

        setImageUrl(CAT_ENDPOINT_IMAGE_URL)
      })
  }, [])

  return (
    <div>
      <h1>Funny facts about cats 😸</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the fisrt three words for ${fact}`}
        />
      )}
      <button>Refresh</button>
    </div>
  )
}
