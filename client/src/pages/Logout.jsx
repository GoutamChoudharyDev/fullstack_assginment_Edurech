import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser = async () => {
            try {
                await api.post("/auth/user/logout");
            } catch (error) {
                console.log("logout error :", error);
            } finally {
                navigate("/");
            }
        };

        logoutUser();
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-lg font-semibold">Logging you out...</p>
        </div>
    );
};

export default Logout;
