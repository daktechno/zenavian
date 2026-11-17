import { useState } from 'react'

/**
 * <img> for assets that live on a remote host (original Stitch-hosted URLs).
 * If the image cannot be loaded, `fallback` is rendered instead of a broken-image icon.
 */
export default function RemoteImage({ src, alt, className, fallback, ...rest }) {
  const [failed, setFailed] = useState(false)
  if (failed) return fallback
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      {...rest}
    />
  )
}
