export function pricePerKg(price, quantity, unit) {
  let base = quantity;

  if (unit === 'g') base = quantity / 1000;
  if (unit === 'ml') base = quantity / 1000;

  return price / base;
}
