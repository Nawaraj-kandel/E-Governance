import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedDriver = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const email = localStorage.getItem("data");
        const pattern = /^[a-zA-Z0-9._%+-]+@(?!gmail\.com)(?:[a-zA-Z0-9-]+\.)?driver\.com$/;

        if (pattern.test(email)) {
            return;
        } else {
            navigate("/");
        }
    }, [navigate]);

    return children;
}

export default ProtectedDriver;
