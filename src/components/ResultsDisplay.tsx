interface ResultsDisplayProps {
  tipPerPerson: number;
  perPerson: number;
  bill: number;
  currentTip: number;
  tipAmount: number;
  totalWithTip: number;
}

export default function ResultsDisplay({
  tipPerPerson,
  perPerson,
  bill,
  currentTip,
  tipAmount,
  totalWithTip,
}: ResultsDisplayProps) {
  return (
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
  );
}
