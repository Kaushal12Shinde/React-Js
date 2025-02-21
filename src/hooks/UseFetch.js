import { useEffect } from "react";

const UseFetch = (url) =>{

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState();

    const fetchData = async()=>{
        try{
            setLoading(true);
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Something Went Wrong");
            }
            const data = await response.json();
            setData(data);
        }
        catch(error){
            setError(error);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(url){
            fetchData();
        }
    },[url]);

    return {
        loading,
        data,
        error
    }
}

export default UseFetch;
