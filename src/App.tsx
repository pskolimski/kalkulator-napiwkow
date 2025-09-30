import { useState } from "react"

export default function App() {
  const [currentTip, setCurrentTip] = useState(0)
  const [people, setPeople] = useState(1);
  const [bill, setBill] = useState(0);

  // Calculate tip and totals
  const tipAmount = bill * currentTip;
  const totalWithTip = bill + tipAmount;
  const perPerson = people > 0 ? totalWithTip / people : 0;
  const tipPerPerson = people > 0 ? tipAmount / people : 0;

  return (
    <div className="container">
      <div className="card">

        <h1>💰 Kalkulator napiwków</h1>

        <div className="input-group">
          <label htmlFor="bill">Kwota rachunku:</label>
          <input
            type="number"
            id="bill"
            placeholder="0.00"
            value={bill}
            onChange={(e) => setBill(parseFloat(e.target.value) || 0)}
          />
          <span>zł</span>
        </div>

        <div className="tip-section">
          <p>Wybierz napiwek:</p>
          <div className="btn-group">
            <button className={`btn ${currentTip === 0.1 ? "btn-primary" : "btn-secondary"}`} onClick={() => setCurrentTip(0.1)}>10%</button>
            <button className={`btn ${currentTip === 0.15 ? "btn-primary" : "btn-secondary"}`} onClick={() => setCurrentTip(0.15)}>15%</button>
            <button className={`btn ${currentTip === 0.2 ? "btn-primary" : "btn-secondary"}`} onClick={() => setCurrentTip(0.2)}>20%</button>
            <button className={`btn ${currentTip === 0.25 ? "btn-primary" : "btn-secondary"}`} onClick={() => setCurrentTip(0.25)}>25%</button>
          </div>
        </div>

        <div className="people-section">
          <p>Liczba osób:</p>
          <div className="people-counter">
            <button
              className="btn btn-counter"
              onClick={() => setPeople(Math.max(1, people - 1))}
              disabled={people <= 1}
            >
              -
            </button>
            <span className="people-count">{people}</span>
            <button
              className="btn btn-counter"
              onClick={() => setPeople(people + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div className="results">
          <div className="result-row">
            <div className="result-label">
              <span>Napiwek na osobę:</span>
            </div>
            <div className="result-value">
              <span className="amount">{tipPerPerson.toFixed(2)} zł</span>
            </div>
          </div>

          <div className="result-row total">
            <div className="result-label">
              <span>Razem na osobę:</span>
            </div>
            <div className="result-value">
              <span className="amount">{perPerson.toFixed(2)} zł</span>
            </div>
          </div>

          {bill > 0 && (
            <div className="summary">
              <p>Podsumowanie:</p>
              <p>Rachunek: {bill.toFixed(2)} zł</p>
              <p>Napiwek ({(currentTip * 100).toFixed(0)}%): {tipAmount.toFixed(2)} zł</p>
              <p>Razem: {totalWithTip.toFixed(2)} zł</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
