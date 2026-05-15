export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: 'Pâtes', store: 'Carrefour', price: 1.89, quantity: 500, unit: 'g' },
    { id: 2, name: 'Pâtes', store: 'Colruyt', price: 3.2, quantity: 1, unit: 'kg' },
    { id: 3, name: 'Riz', store: 'Lidl', price: 2.6, quantity: 1, unit: 'kg' }
  ]);
}
