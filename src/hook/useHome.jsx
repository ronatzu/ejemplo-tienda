import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useHome = (path, delay) => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = setTimeout(() => navigate(path), delay);
        return () => clearTimeout(timeoutId);
    }, [path, delay, navigate]);
};

export default useHome;
