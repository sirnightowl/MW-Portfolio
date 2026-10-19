// Lightweight harvesting deterrent, not a secret or a security boundary.
// Decode only after a visitor chooses to reveal the address or opens a draft.
export function getContactEmail(): string {
  return atob('bWFydHdoaXR0eUBnbWFpbC5jb20=')
}
