export function scrollToHash(hash) {
  if (!hash || !hash.startsWith('#')) return;
  const target = document.querySelector(hash);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function isExternalLink(href) {
  return (
    href.startsWith('http') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    ['.pdf', '.png', '.jpg', '.jpeg'].some((extension) => href.endsWith(extension))
  );
}
