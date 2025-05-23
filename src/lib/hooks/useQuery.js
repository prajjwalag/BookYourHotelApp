import { useEffect, useState } from "react";
import axiosInstance from "../axios-instance";

export default function useQuery({url, options = {}}) {
    const [queryState, setQueryState] = useState({
        data: null,
        isLoading: false,
        error: null
    }); 

    async function fetchData() {
        setQueryState({
            data: null,
            isLoading: true, 
            error: null
        });

        try {
            
            const response = await axiosInstance(url, options);
            setQueryState((prev) => ({
                ...prev,
                data: response.data
            }));
        } catch (e) {
             setQueryState((prev) => ({
                ...prev,
                error: e.message,
            }));
        } finally {
             setQueryState((prev) => ({
                ...prev,
                isLoading: false
            }));
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return {...queryState};
}