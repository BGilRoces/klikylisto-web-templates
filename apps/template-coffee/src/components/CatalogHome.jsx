import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import TemplatesSection from './sections/TemplatesSection'
import CTASection from './sections/CTASection'
import ShowcaseSection from './sections/ShowcaseSection'
import TemplateCard from './ui/TemplateCard'
import WhyChooseUsSection from './sections/WhyChooseUsSection'

const CatalogHome = ({ templates }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <Header />

      <TemplatesSection>
        {templates.map((template, index) => (
          <TemplateCard key={template.id} template={template} index={index} />
        ))}
      </TemplatesSection>

      <ShowcaseSection />

      <WhyChooseUsSection />

      <CTASection />

      <Footer />
    </div>
  )
}

export default CatalogHome
