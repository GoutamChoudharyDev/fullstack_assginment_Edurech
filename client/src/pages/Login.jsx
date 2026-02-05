import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const Login = () => {
    // useState
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    let navigate = useNavigate();

    // handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError(true);
            return;
        }

        try {
            setError(false);

            await api.post("/auth/user/login", {
                email,
                password,
            });

            navigate("/home");
        } catch (err) {
            console.log("login error :", err);
            setError(true);
        }
    };

    return (
        <div
            style={{
                backgroundImage: "url('/bgImage1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
            }}
            className="flex items-center justify-center"
        >
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-80 space-y-4"
            >
                <h2 className="text-2xl font-semibold text-center">Login</h2>

                {error && (
                    <p className="text-red-500 text-sm text-center">
                        All fields are required or invalid credentials
                    </p>
                )}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setError(false);
                    }}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setError(false);
                    }}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                />

                <button
                    type="submit"
                    className="w-full bg-cyan-600 cursor-pointer text-white py-2 rounded hover:bg-cyan-700"
                >
                    Login
                </button>

                <p className="text-sm text-center">
                    Don’t have an account?{" "}
                    <span
                        onClick={() => navigate("/signup")}
                        className="text-cyan-600 cursor-pointer"
                    >
                        Register
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Login;
