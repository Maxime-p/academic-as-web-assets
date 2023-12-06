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
      <div
        className={`absolute top-0 left-0 -translate-x-full text-4xl font-bold text-white bg-red-400 entering-left ${
          data?.active ? 'active' : ''
        }`}
      >
        {data?.TeamA?.name}
      </div>
      <div
        className={`absolute top-0 right-0 translate-x-full text-4xl font-bold text-white bg-red-400 entering-right ${
          data?.active ? 'active' : ''
        }`}
      >
        {data?.TeamB?.name}
      </div>
      <div
        className={`absolute bottom-0 left-0 -translate-x-full text-4xl font-bold text-white bg-red-400 entering-left ${
          data?.active ? 'active' : ''
        }`}
      >
        {data?.TeamC?.name}
      </div>
      <div
        className={`absolute bottom-0 right-0 translate-x-full text-4xl font-bold text-white bg-red-400 entering-right ${
          data?.active ? 'active' : ''
        }`}
      >
        {data?.TeamD?.name}
      </div>
    </>
  )
}
