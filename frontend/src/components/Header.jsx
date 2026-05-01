import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice.js";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((s) => s.auth.isAuthenticated);
  const profile = useSelector((s) => s.user.profile);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/sign-in");
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src="/img/argentBankLogo.png" alt="Argent Bank Logo"/>
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div>
        {!isAuth ? (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          <>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {profile?.userName || "Profile"}
            </Link>
            <button className="main-nav-item btn-link" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </button>
          </>
        )}
      </div>
    </nav>
  );
}