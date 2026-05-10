'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function Logo() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <span style={{ height: '28px', width: '140px' }} />
  }

  // OpenModels.svg = light/white logo for dark backgrounds
  // om.svg = dark logo for light backgrounds
  const src = resolvedTheme === 'dark' ? '/OpenModels.svg' : '/om.svg'

  return (
    <img
      src={src}
      alt="OpenModels"
      style={{ height: '24px', width: 'auto' }}
    />
  )
}
