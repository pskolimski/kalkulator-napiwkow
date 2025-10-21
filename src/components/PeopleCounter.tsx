interface PeopleCounterProps {
  people: number;
  onPeopleChange: (value: number) => void;
}

export default function PeopleCounter({ people, onPeopleChange }: PeopleCounterProps) {
  return (
    <div className="people-section">
      <p>Liczba osób:</p>
      <div className="people-counter">
        <button
          className="btn btn-counter"
          onClick={() => onPeopleChange(Math.max(1, people - 1))}
          disabled={people <= 1}
        >
          -
        </button>
        <span className="people-count">{people}</span>
        <button
          className="btn btn-counter"
          onClick={() => onPeopleChange(people + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
