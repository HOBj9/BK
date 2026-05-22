export type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
};

export type PageSEOInput = SEOProps;

export type BreadcrumbItem = {
  label: string;
  path?: string;
};
