export type RouteConfigEntry = {
  id: string;
  path: string;
  label: string;
  title?: string;
  page: string;
  layout: string;
  dynamic?: boolean;
  placeholder?: boolean;
  noindex?: boolean;
};
