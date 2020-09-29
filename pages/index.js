import { useState, useEffect } from 'react'

export default function Home() {
  const [name, setName] = useState('')
  useEffect(() => {
    setName(window.location.hostname.split(".")[0])
  })

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}
