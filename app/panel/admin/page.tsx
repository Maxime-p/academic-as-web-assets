'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { onValue, ref, set } from '@firebase/database'

import { rtdb } from '@/services/firebase'

interface FormData {
  team1Name: string
  team1Score: number
  team2Name: string
  team2Score: number
  team3Name: string
  team3Score: number
  team4Name: string
  team4Score: number
  active: boolean
}

export default function AdminPage() {
  const { register, handleSubmit, reset } = useForm<FormData>()

  useEffect(() => {
    return onValue(ref(rtdb, 'currentMatch'), (snapshot) => {
      const data = snapshot.val()

      if (snapshot.exists()) {
        reset({
          team1Name: data.TeamA.name,
          team2Name: data.TeamB.name,
          team1Score: data.TeamA.score,
          team2Score: data.TeamB.score,
          team3Name: data.TeamC.name,
          team4Name: data.TeamD.name,
          team3Score: data.TeamC.score,
          team4Score: data.TeamD.score,
          active: data.active,
        })
      }
    })
  }, [])

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
      TeamC: {
        name: data.team3Name,
        score: data.team3Score,
      },
      TeamD: {
        name: data.team4Name,
        score: data.team4Score,
      },
      active: data.active,
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
          <div className="flex flex-col">
            <label htmlFor="team3Name">Team 3 Name</label>
            <input id="team3Name" {...register('team3Name')} />
            <label htmlFor="team3Score">Team 3 Score</label>
            <input id="team3Score" {...register('team3Score')} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="team4Name">Team 4 Name</label>
            <input id="team4Name" {...register('team4Name')} />
            <label htmlFor="team4Score">Team 4 Score</label>
            <input id="team4Score" {...register('team4Score')} />
          </div>
        </div>
        <input type="checkbox" {...register('active')} />
        <button className="mt-4" type="submit">
          Submit
        </button>
      </form>
    </>
  )
}
