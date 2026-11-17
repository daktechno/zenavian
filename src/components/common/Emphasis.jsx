/** Renders `*text*` segments of a string as <em>. Keeps content strings in data files plain. */
export default function Emphasis({ text }) {
  return text
    .split(/(\*[^*]+\*)/g)
    .map((part, i) =>
      part.startsWith('*') && part.endsWith('*') ? <em key={i}>{part.slice(1, -1)}</em> : part,
    )
}
