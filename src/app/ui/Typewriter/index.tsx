'use client'

import { useEffect, useState } from 'react'

export default function Typewriter() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const phrases = ['Propósito', 'e Resultado.']

  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[index]
    const timeout = setTimeout(() => {
      const nextText = deleting
        ? phrase.slice(0, text.length - 1)
        : phrase.slice(0, text.length + 1)

      setText(nextText)

      if (!deleting && nextText === phrase) {
        setTimeout(() => setDeleting(true), 1200)
      } else if (deleting && nextText === '') {
        setDeleting(false)
        setIndex((index + 1) % phrases.length)
      }
    }, deleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [text, deleting, phrases, index])

  return (
    <div className="font-sans font-bold text-center sm:text-left max-w-[90%] sm:max-w-lg mx-auto sm:mx-0">
      <h1 className="text-4xl font-bold mb-1">Tecnologia com</h1>
      <h1 className="text-4xl font-mono whitespace-pre-line bg-gradient-to-b from-[#3b82f6] via-[#573BF6] to-[#573BF6] bg-clip-text text-transparent">
        <span aria-hidden="true">
          {text}
          <span className="border-r-2 border-white animate-blink ml-1" />
        </span>
        <span className="sr-only">{phrases[0]}</span>
      </h1>
    </div>
  )
}