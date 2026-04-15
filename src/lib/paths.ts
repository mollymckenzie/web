const basePath = import.meta.env.BASE_URL ?? '/';

export function withBasePath(path = '/'): string {
  const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
  const normalizedPath = path === '/' ? '' : path.replace(/^\/+/, '');

  if (normalizedPath === '') {
    return normalizedBase;
  }

  return `${normalizedBase}${normalizedPath}`;
}