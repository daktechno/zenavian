import raw from './siteImages.json'

const pick = (entry) => entry.local || entry.remote

/** Resolved image sources. A local file (when configured) wins over the original remote URL. */
export const siteImages = {
  sharma: pick(raw.sharma),
  map: pick(raw.map),
}
