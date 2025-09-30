import { useState } from "react"

export default function App() {
  const [currentTip, setCurrentTip] = useState(0)

  return (
    <div className="container">
      <div className="card">

        <h1>💰 Kalkulator napiwków</h1>

        <input type="number" />

        <p>Wybierz napiwek:</p>
        <div className="btn-group">
          <button className={`btn ${currentTip === 0.1 ? "btn-primary" : "btn-secondary"}`} onClick={() => setCurrentTip(0.1)}>10%</button>
          <button className={`btn ${currentTip === 0.15 ? "btn-primary" : "btn-secondary"}`} onClick={() => setCurrentTip(0.15)}>15%</button>
          <button className={`btn ${currentTip === 0.2 ? "btn-primary" : "btn-secondary"}`} onClick={() => setCurrentTip(0.2)}>20%</button>
          <button className={`btn ${currentTip === 0.25 ? "btn-primary" : "btn-secondary"}`} onClick={() => setCurrentTip(0.25)}>25%</button>
        </div>

        <div>
          <div>
            <button className="btn">-</button>
            <span>1</span>
            <button className="btn">+</button>
          </div>

          <span>200zł</span>
          <span>Za osobę (z napiwkiem)</span>
        </div>
      </div>
    </div>
  )
}
