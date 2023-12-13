'use client'

import { useEffect, useState } from 'react'

import { onValue, ref } from '@firebase/database'

import { rtdb } from '@/services/firebase'

export default function RPage() {
  const [data, setData] = useState({})

  useEffect(() => {
    return onValue(ref(rtdb, 'currentMatch'), (snapshot) => {
      const data = snapshot.val()

      if (snapshot.exists()) {
        setData(data)
      }
    })
  }, [])

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
