export const pageMap = {
  home: () => import('@/data/home.json').then((m) => m.default),
  services: () => import('@/data/services.json').then((m) => m.default),
  // Add new pages here → create data/yourpage.json and add key
} as const;

export type PageSlug = keyof typeof pageMap;