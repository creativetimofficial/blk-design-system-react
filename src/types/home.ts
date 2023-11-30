export interface BenefitsLang {
  lang: {
    section: string
    title: string
    benefits: {
      title: string
      description: string
    }[]
  }
}

export interface FeaturesLang {
  lang: {
    section: string
    title: string
    description: string
    features: {
      title: string
      description: string
    }[]
  }
}

export interface PricingLang {
  lang: {
    section: string
    title: string
    plans: {
      title: string
      description: string
      price: string
      features: string[]
      cta: string
    }[]
  }
}
