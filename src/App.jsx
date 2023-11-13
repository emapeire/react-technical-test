/* eslint-disable space-before-function-paren */
import useFactAndImage from './hooks/useFactAndImage'

export default function App() {
  const { isFact, imageUrl, getFactAndImage } = useFactAndImage()

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
      <button onClick={getFactAndImage}>Get new fact</button>
    </div>
  )
}
