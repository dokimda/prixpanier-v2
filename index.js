import { useEffect, useState } from 'react';
import { pricePerKg } from '../lib/logic';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const enriched = products
    .map(p => ({
      ...p,
      perKg: pricePerKg(p.price, p.quantity, p.unit)
    }))
    .sort((a, b) => a.perKg - b.perKg);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>PrixPanier V2</h1>
      <p>Comparateur alimentaire €/kg</p>

      <h2>Meilleures offres</h2>

      {enriched.map(p => (
        <div key={p.id} style={{ marginBottom: 10 }}>
          <b>{p.name}</b><br/>
          {p.store} — {p.price}€ — {p.perKg.toFixed(2)}€/kg
        </div>
      ))}
    </div>
  );
}
