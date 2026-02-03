// src/components/SEOHead.tsx
import { Helmet } from 'react-helmet-async';
import { seoConfig, structuredData } from '@/config/seo';

interface SEOHeadProps {
  page?: keyof typeof seoConfig;
}

export const SEOHead = ({ page = 'home' }: SEOHeadProps) => {
  const pageConfig = seoConfig[page];
  const keywords = 'keywords' in pageConfig ? pageConfig.keywords : undefined;
  const ogImage = 'ogImage' in pageConfig ? pageConfig.ogImage : '/og-image.jpg';
  
  return (
    <Helmet>
      {/* Balises META principales */}
      <title>{pageConfig.title}</title>
      <meta name="description" content={pageConfig.description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={pageConfig.canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageConfig.canonical} />
      <meta property="og:title" content={pageConfig.title} />
      <meta property="og:description" content={pageConfig.description} />
      <meta property="og:image" content={`https://www.summitflow.fr${ogImage}`} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Summit Flow" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={pageConfig.canonical} />
      <meta name="twitter:title" content={pageConfig.title} />
      <meta name="twitter:description" content={pageConfig.description} />
      <meta name="twitter:image" content={`https://www.summitflow.fr${ogImage}`} />
      
      {/* Balises GEO */}
      <meta name="geo.region" content="FR-OCC" />
      <meta name="geo.placename" content="Toulouse" />
      <meta name="geo.position" content="43.4829;1.3889" />
      <meta name="ICBM" content="43.4829, 1.3889" />
      
      {/* Balises additionnelles */}
      <meta name="author" content="Marie Jolly - Summit Flow" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="fr" />
      <meta name="coverage" content="Toulouse, Occitanie, France" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData.organization)}
      </script>
      
      {/* Structured Data - LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData.localBusiness)}
      </script>
      
      {/* Structured Data - Breadcrumb */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData.breadcrumb)}
      </script>
      
      {/* Structured Data - FAQ (page d'accueil uniquement) */}
      {page === 'home' && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData.faq)}
        </script>
      )}
    </Helmet>
  );
};
