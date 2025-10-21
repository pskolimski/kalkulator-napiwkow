import { useState } from "react"
import BillInput from "./components/BillInput"
import TipSelector from "./components/TipSelector"
import PeopleCounter from "./components/PeopleCounter"
import ResultsDisplay from "./components/ResultsDisplay"

export default function App() {
  const [currentTip, setCurrentTip] = useState(0)
  const [people, setPeople] = useState(1);
  const [bill, setBill] = useState(0);

  const tipAmount = bill * currentTip;
  const totalWithTip = bill + tipAmount;
  const perPerson = people > 0 ? totalWithTip / people : 0;
  const tipPerPerson = people > 0 ? tipAmount / people : 0;

  return (
    <div className="container">
      <div className="card">
        <h1>💰 Kalkulator napiwków</h1>

        <BillInput bill={bill} onBillChange={setBill} />

        <TipSelector currentTip={currentTip} onTipChange={setCurrentTip} />

        <PeopleCounter people={people} onPeopleChange={setPeople} />

        <ResultsDisplay
          tipPerPerson={tipPerPerson}
          perPerson={perPerson}
          bill={bill}
          currentTip={currentTip}
          tipAmount={tipAmount}
          totalWithTip={totalWithTip}
        />
      </div>
    </div>
  )
}
