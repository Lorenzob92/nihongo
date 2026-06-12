const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/**
 * Format an ISO date string (YYYY-MM-DD) as British-style "5 Jun 2026".
 * Parsed by hand (no Date object) so server and client render identically and
 * there is no timezone drift. Returns "" for missing or malformed input.
 */
export function formatBuiltDate(iso?: string): string {
  if (!iso) return "";
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return "";
  const year = m[1];
  const month = MONTHS[Number(m[2]) - 1];
  const day = Number(m[3]);
  if (!month) return "";
  return `${day} ${month} ${year}`;
}
