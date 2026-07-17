import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {

    const {

        theme,

        toggleTheme,

    } = useTheme();

    return (

        <div className="theme-toggle">

            <h3>

                Theme

            </h3>

            <button
                onClick={toggleTheme}
            >

                {

                    theme === "light"

                        ? "🌙 Dark Mode"

                        : "☀️ Light Mode"

                }

            </button>

        </div>

    );

}

export default ThemeToggle;