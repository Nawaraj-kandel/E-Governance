import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedUser = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const email = localStorage.getItem("email");
        const pattern = /^[a-zA-Z0-9._%+-]+@(?!gmail\.com)(?:[a-zA-Z0-9-]+\.)?user\.com$/;

        if (pattern.test(email)) {
            return;
        } else {
            navigate("/");
        }
    }, [navigate]);

    return children;
}

export default ProtectedUser;
