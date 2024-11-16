import { useState,useEffect } from "react";
import axios from "../api";

export const useAxios = (path,params={},deps=[]) =>{
    const [data,setData] = useState(null)
    const [err,setErr] = useState(null)
    useEffect(()=>{
        axios
        .get(path,{
            params
        })
        .then((res) => setData(res.data))
        .catch((err) => setErr(err))
    },[...deps])
    return {data,err}
}