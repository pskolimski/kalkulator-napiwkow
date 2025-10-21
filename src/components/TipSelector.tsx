interface TipSelectorProps {
    currentTip: number;
    onTipChange: (tip: number) => void;
}

export default function TipSelector({ currentTip, onTipChange }: TipSelectorProps) {
    const tipOptions = [
        { value: 0.1, label: '10%' },
        { value: 0.15, label: '15%' },
        { value: 0.2, label: '20%' },
        { value: 0.25, label: '25%' },
    ];

    return (
        <div className="tip-section">
            <p>Wybierz napiwek:</p>
            <div className="btn-group">
                {tipOptions.map((option) => (
                    <button
                        key={option.value}
                        className={`btn ${currentTip === option.value ? "btn-primary" : "btn-secondary"}`}
                        onClick={() => onTipChange(option.value)}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
