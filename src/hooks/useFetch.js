import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [state, setstate] = useState({
        data: null,
        isLoading : true,
        hasError:false,
        error : null
    });

    useEffect(() => {
        getFetch();
    }, [url])

    const setLoadingState = () =>{
        setstate({
            data:null,
            isLoading:true,
            hasError:false,
            error:null
        })
    }

    const getFetch = async () =>{
       
        setLoadingState();
       const reponse = await fetch(url);
      await new Promise(resolve => setTimeout(resolve, 2000));
       if(!reponse.ok){
        setstate({
            data:null,
            isLoading:false,
            hasError:true,
            error: {
                code: reponse.status,
                message: reponse.statusText
            }
        })
        return
       }

       const data = await reponse.json();
       console.log(data);
        setstate({
            data:data,
            isLoading:false,
            hasError:false,
            error: null
        })
    }
    

    return {
        data : state.data,
        isLoading : state.isLoading,
        hasError : state.hasError,
    }
}
