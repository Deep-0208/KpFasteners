const store = new Map<string, number[]>();

export function check(ip: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const timestamps = (store.get(ip) ?? []).filter((t) => now - t < windowMs);
  if (timestamps.length >= limit) {
    store.set(ip, timestamps);
    return false;
  }
  timestamps.push(now);
  store.set(ip, timestamps);
  return true;
}
