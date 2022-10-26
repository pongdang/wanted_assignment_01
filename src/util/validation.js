export function isEmptyValue(value) {
  return value.trim() !== '';
}

export function isValidEmail(value) {
  return value.includes('@');
}

export function isValidPassword(value) {
  return value.length >= 8;
}
