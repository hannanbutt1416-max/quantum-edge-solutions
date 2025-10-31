import { useEffect } from 'react';

interface SEOHeadProps {
  currentPage: string;
}

interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
}

export function SEOHead({ currentPage }: SEOHeadProps) {
  const pageMeta: Record<string, PageMeta> = {
    home: {
      title: 'Quantum Edge Solutions | Digital Marketing, SEO & SaaS Development Agency',
      description: 'Premier B2B digital marketing agency specializing in SEO, local SEO, social media marketing, web development, app development, and SaaS solutions. Drive measurable growth with data-driven strategies.',
      keywords: 'digital marketing agency, SEO services, local SEO, Google My Business optimization, social media marketing, content marketing, web development, app development, SaaS development, marketing automation, B2B marketing',
    },
    services: {
      title: 'Digital Marketing Services | SEO, Social Media & SaaS Development',
      description: 'Comprehensive digital marketing services including technical SEO, local search optimization, social media campaigns, content marketing, web/app development, and custom SaaS platforms.',
      keywords: 'SEO services, local SEO optimization, Google My Business, social media marketing, content strategy, website development, mobile app development, SaaS platforms, marketing automation',
    },
    about: {
      title: 'About Quantum Edge | Data-Driven Digital Marketing Experts',
      description: 'Enterprise-grade digital marketing and automation agency with 500+ clients, 98% retention, and $50M+ revenue generated. AI-powered optimization for measurable results.',
      keywords: 'digital marketing agency, marketing automation, AI marketing, enterprise solutions, B2B agency, marketing ROI, data-driven marketing',
    },
    portfolio: {
      title: 'Case Studies | Proven Digital Marketing Success Stories',
      description: 'Real results from our digital marketing campaigns: 287% organic traffic growth, 320% social engagement, 2.5x lead generation. See our proven track record.',
      keywords: 'marketing case studies, SEO results, digital marketing ROI, client success stories, B2B marketing results',
    },
    blog: {
      title: 'Digital Marketing Insights | SEO & SaaS Industry Blog',
      description: 'Expert insights on SEO strategies, local search optimization, social media marketing, SaaS development, and digital transformation.',
      keywords: 'digital marketing blog, SEO tips, local SEO guide, social media strategy, SaaS insights, marketing automation, content marketing',
    },
    contact: {
      title: 'Contact Us | Start Your Digital Marketing Project Today',
      description: 'Get a free consultation with our digital marketing experts. Specializing in SEO, local search, social media, web/app development, and SaaS solutions.',
      keywords: 'contact digital marketing agency, SEO consultation, marketing quote, free audit, digital marketing contact',
    },
  };

  const meta = pageMeta[currentPage] || pageMeta.home;
  
  const businessInfo = {
    name: 'Quantum Edge Solutions',
    url: 'https://quantumedge.com',
    logo: 'https://quantumedge.com/logo.png',
    email: 'contact@quantomedge.io',
    phone: '+1 (614) 405-5814',
    address: {
      streetAddress: '7838 Malton Ln',
      addressLocality: 'Worthington',
      addressRegion: 'OH',
      postalCode: '43085',
      addressCountry: 'US',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: businessInfo.name,
    url: businessInfo.url,
    logo: businessInfo.logo,
    email: businessInfo.email,
    telephone: businessInfo.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.streetAddress,
      addressLocality: businessInfo.address.addressLocality,
      addressRegion: businessInfo.address.addressRegion,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.addressCountry,
    },
    sameAs: [
      'https://www.linkedin.com/company/quantumedge',
      'https://twitter.com/quantumedge',
      'https://www.facebook.com/quantumedge',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: businessInfo.name,
    image: businessInfo.logo,
    url: businessInfo.url,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.streetAddress,
      addressLocality: businessInfo.address.addressLocality,
      addressRegion: businessInfo.address.addressRegion,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.addressCountry,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
    },
  };

  useEffect(() => {
    document.title = meta.title;

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    updateMetaTag('description', meta.description);
    updateMetaTag('keywords', meta.keywords);
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large');
    
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      document.head.appendChild(viewport);
    }
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');

    updateMetaTag('og:title', meta.title, true);
    updateMetaTag('og:description', meta.description, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', `${businessInfo.url}/#${currentPage}`, true);
    updateMetaTag('og:image', businessInfo.logo, true);
    updateMetaTag('og:site_name', businessInfo.name, true);

    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', meta.title);
    updateMetaTag('twitter:description', meta.description);
    updateMetaTag('twitter:image', businessInfo.logo);

    document.documentElement.setAttribute('lang', 'en-US');

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.href = `${businessInfo.url}/#${currentPage}`;

    const updateStructuredData = (id: string, data: object) => {
      let script = document.querySelector(`script[data-schema="${id}"]`);
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-schema', id);
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };

    updateStructuredData('organization', organizationSchema);
    updateStructuredData('localbusiness', localBusinessSchema);

  }, [currentPage, meta]);

  return null;
}
