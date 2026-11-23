// import { useRef } from 'react'
// import Button from './Button'
// import { useScrollReveal } from '../../hooks/useGSAPAnimations'

// /** Gradient call-to-action band (from the Home design). */
// export default function CtaBanner({ title, text, actions }) {
//   const scope = useRef(null)
//   useScrollReveal(scope)
//   return (
//     <section ref={scope} className="w-full bg-white pb-12 lg:pb-24" aria-label={title}>
//       <div className="container-page">
//         <div data-reveal className="rounded-2xl bg-gradient-to-r from-plum-dark via-plum-deep to-primary p-space-lg text-white shadow-xl lg:p-space-xl">
//           <div className="flex flex-col items-start justify-between gap-space-lg md:flex-row md:items-center">
//             <div className="min-w-0 max-w-2xl">
//               <h2 className="mb-space-xs text-headline-md text-white">{title}</h2>
//               <p className="text-body-md text-white/85">{text}</p>
//             </div>
//             <div className="flex w-full shrink-0 flex-col gap-space-sm sm:w-auto sm:flex-row">
//               {actions.map(({ label, ...a }) => (
//                 <Button key={label} {...a}>{label}</Button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }




import { useRef } from 'react'
import Button from './Button'
import { useScrollReveal } from '../../hooks/useGSAPAnimations'

/** Call-to-action band */
export default function CtaBanner({ title, text, actions }) {
  const scope = useRef(null)
  useScrollReveal(scope)
  return (
    <section ref={scope} className="w-full bg-white pb-12 lg:pb-24" aria-label={title}>
      <div className="container-page">
        <div
          data-reveal
          className="rounded-2xl border border-outline-variant bg-surface/50 p-space-lg text-on-surface shadow-xl lg:p-space-xl"
        >
          <div className="flex flex-col items-start justify-between gap-space-lg md:flex-row md:items-center">
            <div className="min-w-0 max-w-2xl">
              <h2 className="mb-space-xs text-headline-md text-on-surface">{title}</h2>
              <p className="text-body-md text-on-surface-variant">{text}</p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-space-sm sm:w-auto sm:flex-row">
              {actions.map(({ label, ...a }) => (
                <Button key={label} {...a} variant="outline">
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}