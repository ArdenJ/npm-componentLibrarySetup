import { useState, useEffect } from 'react'
import * as mm from 'music-metadata-browser'

function useData (source) {
  const [id3Data, setId3Data] = useState(null)
  // mm.fetchFromUrl(source).then(res => {
  //   console.log(res)
  // })
  useEffect(() => {
    mm.fetchFromUrl(source).then(
      setId3Data(tags => {
        console.log('INITIAL' + tags)
        const tagList = {
          ...tags
        }
        console.log('TAG LIST' + tagList)
        return tagList
      })
    )
  }, [setId3Data, source])

  return {
    id3Data
  }
}

export default useData
