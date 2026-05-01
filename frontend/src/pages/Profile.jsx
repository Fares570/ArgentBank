import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, updateUsername } from "../features/user/userThunks.js";

export default function Profile() {
  const dispatch = useDispatch();
  const { profile, status, error } = useSelector((s) => s.user);

  const [editing, setEditing] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (!profile) dispatch(fetchProfile());
  }, [dispatch, profile]);

  useEffect(() => {
    if (profile?.userName) setUserName(profile.userName);
  }, [profile]);

  const handleSave = async () => {
    const res = await dispatch(updateUsername(userName));
    if (res.type.endsWith("fulfilled")) setEditing(false);
  };

  if (status === "loading" && !profile) return <p>Loading...</p>;

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {profile ? `${profile.firstName} ${profile.lastName}` : ""}
        </h1>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {!editing ? (
          <>
            <h2>Username: {profile?.userName}</h2>
            <button className="edit-button" onClick={() => setEditing(true)}>
              Edit user name
            </button>
          </>
        ) : (
          <div className="edit-user-form">
            <div className="edit-user-inputs">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="User name"
              />
              <input type="text" value={profile?.firstName || ""} disabled />
              <input type="text" value={profile?.lastName || ""} disabled />
            </div>

            <div className="edit-user-buttons">
              <button className="edit-button" onClick={handleSave}>
                Save
              </button>
              <button
                className="edit-button"
                onClick={() => {
                  setUserName(profile.userName);
                  setEditing(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      <h2 className="sr-only">Accounts</h2>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}