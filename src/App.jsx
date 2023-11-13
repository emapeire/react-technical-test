/* eslint-disable space-before-function-paren */
import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export default function App() {
  const [fact, setFact] = useState()

  // useEffect(() => {}, [])
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => setFact(data.fact))
  }, [])

  return (
    <div>
      <h1 style={{ fontSize: '2rem' }}>Funny facts about cats 😸</h1>
      {fact && <p>{fact}</p>}
    </div>
  )
}
