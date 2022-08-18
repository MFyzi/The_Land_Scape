import axios from '../axios'
import { useState, useEffect } from "react"

const useFetch = (n,search,subSearch) =>{
    
    const [fetch, setFetch] = useState([])
    const fetchVideos =(n,search,subSearch)=>{
        axios.get(`&q=${search}+${subSearch}`).then((response)=>{
            for(let i=2;i<n+2;i++){
                setFetch(prevStete => [...prevStete,response.data.hits[i]])
            }
        }).catch(err=>{
            alert('network refresh')
        })    
    } 
    useEffect(() => {
        fetchVideos(n,search,subSearch)
        console.log("hai")
    }, [n,search,subSearch])
    
    return {fetch}
}

export default useFetch