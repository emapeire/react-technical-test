/* eslint-disable space-before-function-paren */
import { useEffect, useState } from 'react'
import { getFactAndImage } from './services/fact'

export default function App() {
  const [isFact, setIsFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  const getNewFactAndImage = async () => {
    const { fact, imageUrl } = await getFactAndImage()
    setIsFact(fact)
    setImageUrl(imageUrl)
  }

  useEffect(() => {
    getNewFactAndImage()
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
      <button onClick={getNewFactAndImage}>Get new fact</button>
    </div>
  )
}
