export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isValidPhone(value: string) {
  return /[0-9]{7,}/.test(value.replace(/[^0-9]/g, ""));
}
