import { useEffect, useState } from "react";
import { Check } from "lucide-react";

const themes = [
    "forest",
    "cyberpunk",
];

const ThemeSelector = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "forest"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Handle click outside to close dropdown (optional if using DaisyUI dropdown-hover/click)

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
                Theme
                <svg
                    width="12px"
                    height="12px"
                    className="h-2 w-2 fill-current opacity-60 inline-block align-middle ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                >
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-300 rounded-box w-52 max-h-96 overflow-y-auto"
            >
                {themes.map((t) => (
                    <li key={t}>
                        <button
                            className={`justify-between ${theme === t ? "active" : ""}`}
                            onClick={() => setTheme(t)}
                        >
                            <span className="capitalize">{t}</span>
                            {theme === t && <Check className="w-4 h-4 ml-2" />}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ThemeSelector;
