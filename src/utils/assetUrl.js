const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export function assetUrl(path) {
  return `${baseUrl}${path.replace(/^\/+/, "")}`;
}

export const siteRootUrl = baseUrl;
