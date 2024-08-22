import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../http.common"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();


    const login = async (username, password) => {
        try {
            const response = await http.post("/auth/login", {
                "username": `${username}`,
                "password": `${password}`
            });
            if (response.status === 200) {
                const principal = {
                    id: response.data.id,
                    username: response.data.username,
                    nome: response.data.name,
                    role: response.data.roles[0].role,
                };

                setIsAuthenticated(true);
                localStorage.setItem("principal", JSON.stringify(principal));
                setUser(principal);
                toast.success("User loged sucessfully!");
                navigate("/admin/dashboard");
            }
        } catch (error) {
            toast.error("User or password invalid!");
        }
    }
    useEffect(() => {
        const loggedUser = localStorage.getItem("principal");
        if (loggedUser) {
            const parsed = JSON.parse(loggedUser);
            setUser(parsed);
            setIsAuthenticated(true);
        }
    }, []);
    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("principal");
        navigate("/");
    };

    const signup = async (name, username, password, email) => {
        try {
            const response = await http.post("/auth/register", {
                "name": name,
                "username": username,
                "password": password,
                "email": email,
               
            });
            if (response.status === 200) { 
                toast.success("User registered successfully!");
                navigate("/"); 
            }
        } catch (error) {
            toast.error("Failed to register user. Please try again.");
        }
    };

    return (
        <>
            <AuthContext.Provider
                value={{
                    isAuthenticated,
                    user,
                    login,
                    logout,
                    signup
                }}
            >
                {children}
            </AuthContext.Provider>
            <ToastContainer />
        </>
    );

}