import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!fullName || !email || !password) {
            setError(true);
            return;
        }

        try {
            await api.post("/auth/user/register", {
                fullName,
                email,
                password,
            });

            navigate("/");
        } catch (error) {
            console.log("register error : ", error);
        }
    };

    return (
        <div
            className="relative flex items-center justify-center"
            style={{
                backgroundImage: "url('/bgImage1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/10"></div>

            <form
                onSubmit={handleSubmit}
                className="z-10 bg-white p-6 rounded-lg shadow-md w-80 space-y-4"
            >
                <h2 className="text-2xl font-semibold text-center">Register</h2>

                {error && (
                    <p className="text-red-500 text-sm text-center">
                        All fields are required or invalid credentials
                    </p>
                )}

                <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={fullName}
                    onChange={(e) => {
                        setFullName(e.target.value)
                        setError(false)
                    }}

                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                />

                <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                        setError(false)
                    }}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                />

                <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                        setError(false)
                    }}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                />

                <button
                    type="submit"
                    className="w-full bg-cyan-600 text-white py-2 cursor-pointer rounded hover:bg-cyan-700"
                >
                    Register
                </button>

                <p className="text-sm text-center">
                    Already have an account?{" "}
                    <span
                        onClick={() => navigate("/")}
                        className="text-cyan-600 cursor-pointer"
                    >
                        Login
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Register;
