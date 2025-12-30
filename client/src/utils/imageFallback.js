export function handleImgError(event) {
  const target = event?.currentTarget;
  if (!target) return;
  target.onerror = null;
  target.src = "/images/placeholders/placeholder.png";
}
