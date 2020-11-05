import React, { useState, useRef, useEffect } from 'react'

interface Person {
  firstName: string
  lastName: string
}

interface Props {
  text: string
  ok?: boolean
  i?: number
  fn?: (bob: string) => void
  person: Person
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface TextNode {
  text: string
}

export const TextField: React.FC<Props> = (props) => {
  const [count, setCount] = useState<TextNode>({ text: 'hi' })
  const inputRef = useRef<HTMLInputElement>(null)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setCount({ text: 'yo' })
  }, [])

  return (
    <div ref={divRef}>
      <input type="text" ref={inputRef} onChange={props.handleChange} />
    </div>
  )
}
