import { useEffect, useState } from 'react'

/**
 * Checks (once) whether a real PDF is served at `url`.
 * Returns 'checking' | 'available' | 'unavailable'.
 * Dev servers and SPA hosts often answer unknown paths with index.html (HTTP 200),
 * so the content-type is verified too — no false "available" states.
 */
export function useFileAvailability(url) {
  const [status, setStatus] = useState('checking')

  useEffect(() => {
    const controller = new AbortController()
    fetch(url, { method: 'HEAD', signal: controller.signal })
      .then((res) => {
        const type = res.headers.get('content-type') || ''
        setStatus(res.ok && type.includes('pdf') ? 'available' : 'unavailable')
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setStatus('unavailable')
      })
    return () => controller.abort()
  }, [url])

  return status
}
