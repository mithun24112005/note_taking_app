import { Link, useNavigate } from "react-router-dom";
import { PlusIcon, LogOut } from "lucide-react";
import ThemeSelector from "./ThemeSelector";

const Navbar = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    if (setIsAuthenticated) setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-7xl p-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl font-bold text-primary font-mono tracking-tight">
            ThinkBoard
          </Link>
          <div className="flex items-center gap-4">
            <ThemeSelector />
            {token ? (
              <>
                <Link to={"/create"} className="btn btn-primary">
                  <PlusIcon className="size-5" />
                  <span className="hidden sm:inline">New Note</span>
                </Link>
                <button onClick={handleLogout} className="btn btn-error btn-outline">
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            ) : (
              <div className="flex gap-2">
                <Link to="/login" className="btn btn-ghost">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
