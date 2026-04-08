export function isAllowedDomain(email?: string | null) {
  const allowed = process.env.NEXT_PUBLIC_ALLOWED_EMAIL_DOMAIN;
  if (!email || !allowed) return false;
  return email.endsWith(`@${allowed}`);
}
