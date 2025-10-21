interface BillInputProps {
    bill: number;
    onBillChange: (value: number) => void;
}

export default function BillInput({ bill, onBillChange }: BillInputProps) {
    return (
        <div className="input-group">
            <label htmlFor="bill">Kwota rachunku:</label>
            <input
                type="number"
                id="bill"
                placeholder="0.00"
                value={bill}
                onChange={(e) => onBillChange(parseFloat(e.target.value) || 0)}
            />
            <span>zł</span>
        </div>
    );
}
