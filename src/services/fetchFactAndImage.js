import { ENDPOINT_RANDOM_FACT, PREFIX_IMAGE_URL } from '../../utils/constants'

export const fecthFactAndImage = async () => {
  try {
    const res = await fetch(ENDPOINT_RANDOM_FACT)
    if (!res.ok) throw new Error('Error fetching data')
    const data = await res.json()
    const { fact } = data

    const threeFirstWords = encodeURIComponent(fact.split(' ', 3).join(' '))
    const ENDPOINT_IMAGE_URL = `${PREFIX_IMAGE_URL}${threeFirstWords}?fontColor=white`

    return {
      fact,
      imageUrl: ENDPOINT_IMAGE_URL
    }
  } catch (error) {
    console.log('Error:', error)
  }
}
