'use client'

import { useForm } from 'react-hook-form'

import { ref, set } from '@firebase/database'

import { rtdb } from '@/services'

interface FormData {
  team1Name: string
  team2Name: string
  team1Score: number
  team2Score: number
}

export default function AdminPage() {
  const { register, handleSubmit } = useForm<FormData>()

  const formSubmit = async (data: FormData) => {
    await set(ref(rtdb, 'currentMatch'), {
      TeamA: {
        name: data.team1Name,
        score: data.team1Score,
      },
      TeamB: {
        name: data.team2Name,
        score: data.team2Score,
      },
    })
  }

  return (
    <>
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(formSubmit)}
      >
        <div className="w-full flex justify-around">
          <div className="flex flex-col">
            <label htmlFor="team1Name">Team 1 Name</label>
            <input id="team1Name" {...register('team1Name')} />
            <label htmlFor="team1Score">Team 1 Score</label>
            <input id="team1Score" {...register('team1Score')} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="team2Name">Team 2 Name</label>
            <input id="team2Name" {...register('team2Name')} />
            <label htmlFor="team2Score">Team 2 Score</label>
            <input id="team2Score" {...register('team2Score')} />
          </div>
        </div>
        <button className="mt-4" type="submit">
          Submit
        </button>
      </form>
    </>
  )
}
