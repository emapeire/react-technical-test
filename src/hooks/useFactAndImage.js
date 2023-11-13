/* eslint-disable space-before-function-paren */
import { useEffect, useState } from 'react'
import { fecthFactAndImage } from '../services/fetchFactAndImage'

export default function useFactAndImage() {
  const [isFact, setIsFact] = useState()
  const [isImage, setImage] = useState()

  const getFactAndImage = async () => {
    const { fact, imageUrl } = await fecthFactAndImage()
    setIsFact(fact)
    setImage(imageUrl)
  }

  useEffect(() => {
    getFactAndImage()
  }, [])

  return { isFact, isImage, getFactAndImage }
}
