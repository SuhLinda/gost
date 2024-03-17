export function numberFormat(value, options = {}) {
  return new Intl.NumberFormat(options).format(value);
}
