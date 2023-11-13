/* eslint-disable space-before-function-paren */
import useFactAndImage from './hooks/useFactAndImage'

export default function App() {
  const { isFact, isImage, getFactAndImage } = useFactAndImage()

  return (
    <div>
      <h1>Funny facts about cats 😸</h1>
      {isFact && isImage && (
        <>
          <p>{isFact}</p>
          <img
            src={isImage}
            alt={`Image extracted using the first three words for ${isFact}`}
          />
        </>
      )}
      <button onClick={getFactAndImage}>Get new fact</button>
    </div>
  )
}
