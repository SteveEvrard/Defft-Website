import { useEffect } from 'react'
import { useLocation } from 'wouter'

export function RedirectTo(props: { to: string }) {
  const [, setLocation] = useLocation()

  useEffect(() => {
    setLocation(props.to)
  }, [props.to, setLocation])

  return null
}

