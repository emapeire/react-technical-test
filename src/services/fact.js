const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

export const getFactAndImage = async () => {
  try {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    const { fact } = data

    const threeFirstWords = fact.split(' ', 3).join(' ')
    const CAT_ENDPOINT_IMAGE_URL = `${CAT_PREFIX_IMAGE_URL}${threeFirstWords}?fontColor=white`

    return {
      fact,
      imageUrl: CAT_ENDPOINT_IMAGE_URL
    }
  } catch (error) {
    console.log('Error:', error)
  }
}
