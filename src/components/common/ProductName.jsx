export default function ProductName({ name, trademark = false }) {
  return (
    <>
      {name}
      {trademark && (
        <sup className="ml-0.5 align-super text-[0.42em] font-bold tracking-normal">
          TM
        </sup>
      )}
    </>
  )
}