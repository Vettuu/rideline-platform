// src/app/login/page.tsx
'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useState } from "react"


export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: chiamata API di login
    console.log("Login:", { email, password })
  }

return (
  <div className="flex flex-col bg-[#f3f3ed] text-[#204558] min-h-screen ">
    {/* Navbar */}
    <Navbar />

    {/* Main content */}
    <main className="flex-grow flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Accedi al tuo account</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Inserisci la tua email"
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#204558] text-white font-semibold py-2 px-4 rounded-full hover:bg-[#2f5b70] transition duration-200"
          >
            Entra
          </button>
        </form>
      </div>
    </main>

  
  </div>
);


}
