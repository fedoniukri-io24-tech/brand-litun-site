import { BRAND_COURSE } from './data/course'
import Navbar from './components/Navbar'
import BrandHero from './components/BrandHero'
import BrandSections from './components/BrandSections'
import BrandFaq from './components/BrandFaq'
import Footer from './components/Footer'
import page from './konsultatsiya/consultation.module.css'
import theme from './theme.module.css'

export default function HomePage() {
  return (
    <div className={theme.brandPage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'Особистий бренд для викладача',
            description: BRAND_COURSE.hero.lead,
            provider: {
              '@type': 'Person',
              name: 'Ілля Літун',
              affiliation: 'TURBO EDUCATION',
            },
            inLanguage: 'uk',
          }),
        }}
      />
      <Navbar transparent />
      <main className={`${page.page} ${theme.brandTheme}`}>
        <BrandHero />
        <BrandSections />
        <BrandFaq />
      </main>
      <Footer />
    </div>
  )
}
