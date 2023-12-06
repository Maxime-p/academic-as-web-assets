'use client'

import { useEffect, useState } from 'react'

import { onValue, ref } from '@firebase/database'

import { DBData } from '@/app/DBData.type'
import { rtdb } from '@/services'

export default function InGamePage() {
  const [data, setData] = useState<DBData | null>(null)

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
      <div className="absolute top-0 left-0">{data?.TeamA.name}</div>
      <div className="absolute top-0 right-0">{data?.TeamB.name}</div>
      <div className="absolute bottom-0 left-0">{data?.TeamC.name}</div>
      <div className="absolute bottom-0 right-0">{data?.TeamD.name}</div>
    </>
  )
}
