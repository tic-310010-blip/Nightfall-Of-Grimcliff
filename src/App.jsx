import { useState } from 'react';
import './App.css';

const RECETAS = [
  {
    id: 1,
    titulo: "Tacos al Pastor",
    descripcion: "Deliciosos tacos de carne de cerdo adobada con piña, cebolla y cilantro fresco.",
    imagen: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
    tiempo: "45 min",
    porciones: "4 personas",
    ingredientes: [
      "500g de carne de cerdo picada",
      "3 chiles guajillo hidratados",
      "1/2 taza de jugo de naranja",
      "Rodajas de piña fresca",
      "Tortillas de maíz",
      "Cilantro y cebolla picados"
    ],
    pasos: [
      "Licúa los chiles con el jugo de naranja, ajo y especias para el adobo.",
      "Marina la carne durante al menos 30 minutos.",
      "Cocina la carne en una sartén caliente hasta que esté bien dorada.",
      "Sirve en tortillas calientes agregando piña, cebolla y cilantro."
    ]
  },
  {
    id: 2,
    titulo: "Pasta Alfredo con Pollo",
    descripcion: "Cremosa pasta fettuccine bañada en salsa de queso parmesano con pechuga a la plancha.",
    imagen: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    tiempo: "30 min",
    porciones: "2 personas",
    ingredientes: [
      "250g de pasta fettuccine",
      "1 pechuga de pollo en tiras",
      "1 taza de crema para batir",
      "100g de queso parmesano rallado",
      "2 dientes de ajo picados",
      "2 cucharadas de mantequilla"
    ],
    pasos: [
      "Hierve la pasta en agua con sal según las instrucciones del paquete.",
      "En una sartén, saltea el pollo con ajo y mantequilla hasta dorar.",
      "Agrega la crema y el queso parmesano a fuego bajo hasta que espese.",
      "Mezcla la pasta con la salsa y sirve de inmediato."
    ]
  }
];

export default function App() {
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);

  return (
    <div className="app-wrapper">
      <header className="main-header">
        <h1>Recetario Delicioso</h1>
      </header>

      {!recetaSeleccionada ? (
        <main className="menu-container">
          <h2 className="section-title">Nuestras Recetas</h2>
          <div className="recipe-grid">
            {RECETAS.map((receta) => (
              <article 
                key={receta.id} 
                className="recipe-card"
                onClick={() => setRecetaSeleccionada(receta)}
              >
                <div className="card-img-wrapper">
                  <img src={receta.imagen} alt={receta.titulo} />
                </div>
                <div className="card-content">
                  <h3>{receta.titulo}</h3>
                  <p>{receta.descripcion}</p>
                  <button className="btn-view">Ver Receta →</button>
                </div>
              </article>
            ))}
          </div>
        </main>
      ) : (
        <main className="detail-container">
          <button className="btn-back" onClick={() => setRecetaSeleccionada(null)}>
            ← Volver al menú
          </button>
          
          <h2 className="detail-title">{recetaSeleccionada.titulo}</h2>
          
          <div className="detail-img-wrapper">
            <img src={recetaSeleccionada.imagen} alt={recetaSeleccionada.titulo} />
          </div>

          <div className="meta-info">
            <span><strong>Tiempo:</strong> {recetaSeleccionada.tiempo}</span>
            <span><strong>Porciones:</strong> {recetaSeleccionada.porciones}</span>
          </div>

          <section className="detail-section">
            <h3>Ingredientes</h3>
            <ul className="ingredients-list">
              {recetaSeleccionada.ingredientes.map((ing, index) => (
                <li key={index}>{ing}</li>
              ))}
            </ul>
          </section>

          <section className="detail-section">
            <h3>Pasos de preparación</h3>
            <ol className="steps-list">
              {recetaSeleccionada.pasos.map((paso, index) => (
                <li key={index}>{paso}</li>
              ))}
            </ol>
          </section>
        </main>
      )}
    </div>
  );
}