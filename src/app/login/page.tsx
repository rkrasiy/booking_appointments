'use client'
import { redirect } from "next/navigation"
import { FormEvent } from "react"

export default function LoginPage(){

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    localStorage.setItem('user', "mytoken")
    redirect("/dashboard")
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label htmlFor="psw">Password</label>
          <input type="password" name="psw" required />
        </div>
        <button type="submit">Enter</button>
      </form>
    </div>
  )
}