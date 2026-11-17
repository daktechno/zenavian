import PageHero from '../components/common/PageHero'
import Contact from '../sections/Contact'
import MapSection from '../components/common/MapSection'

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact ZenAvian Healthcare"
        description="Reach our scientific advisory desk, institutional sales coordinators or logistics team by email, phone or WhatsApp."
      />
      <Contact />
      <MapSection />
    </>
  )
}
