import { useNavigate } from "react-router-dom";

export default function Transaction() {
  const navigate = useNavigate();

  return (
    <main className="transaction-page">
      <section className="transaction-card">
        <div>
          <p className="transaction-card-title">Argent Bank Checking (x3448)</p>
          <p className="transaction-card-amount">$48,098.43</p>
          <p className="transaction-card-balance">Available balance</p>
        </div>

        <button
          className="transaction-card-close"
          onClick={() => navigate("/profile")}
        >
          ×
        </button>
      </section>

      <section className="transaction-table">
        <div className="transaction-table-header">
          <span>Date</span>
          <span>Description</span>
          <span>Amount</span>
          <span>Balance</span>
          <span></span>
        </div>

        <div className="transaction-row">
          <span>27/02/20</span>
          <span>Golden Sun Bakery</span>
          <span>$8.00</span>
          <span>$298.00</span>
          <span className="transaction-arrow">⌄</span>
        </div>

        <div className="transaction-row">
          <span>27/02/20</span>
          <span>Golden Sun Bakery</span>
          <span>$8.00</span>
          <span>$298.00</span>
          <span className="transaction-arrow">⌄</span>
        </div>

        <div className="transaction-row transaction-row-open">
          <span>27/02/20</span>
          <span>Golden Sun Bakery</span>
          <span>$8.00</span>
          <span>$298.00</span>
          <span className="transaction-arrow">⌄</span>
        </div>

        <div className="transaction-details">
          <p>
            <strong>Transaction type</strong>
            <span>Electronic</span>
          </p>

          <p className="detail-with-note">
            <strong>Category</strong>
            <span>
              Food <span className="transaction-pencil">✎</span>
            </span>
            <span className="mockup-note category-note">
              Pencil allows user to edit to a Select Dropdown
            </span>
          </p>

          <p className="detail-with-note">
            <strong>Note</strong>
            <span>
              lorem ipsum <span className="transaction-pencil">✎</span>
            </span>
            <span className="mockup-note note-note">
              Pencil allows user to add note via text input
            </span>
          </p>
        </div>

        <div className="transaction-row">
          <span>27/02/20</span>
          <span>Golden Sun Bakery</span>
          <span>$8.00</span>
          <span>$298.00</span>
          <span className="transaction-arrow">⌄</span>
        </div>

        <div className="transaction-row">
          <span>27/02/20</span>
          <span>Golden Sun Bakery</span>
          <span>$8.00</span>
          <span>$298.00</span>
          <span className="transaction-arrow">⌄</span>
        </div>
      </section>
    </main>
  );
}