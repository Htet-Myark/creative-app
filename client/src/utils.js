export function normalizeText(value) {
  return String(value || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

// Looser comparison for free-text answers: ignores casing, extra spaces,
// punctuation, and leading articles ("a", "an", "the") so that e.g.
// "sun" matches "the sun".
export function answersMatch(a, b) {
  const clean = (value) =>
    normalizeText(value)
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/^(a|an|the)\s+/, '')
      .trim();
  return clean(a) === clean(b);
}

export function normalizeForLogo(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/\b(a|an|the)\b/g, '') // ignore articles, e.g. "the north face" === "north face"
    .replace(/[^a-z0-9]/g, '');
}

export function shuffleArray(items) {
  const clone = [...items];
  for (let index = clone.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [clone[index], clone[randomIndex]] = [clone[randomIndex], clone[index]];
  }
  return clone;
}
