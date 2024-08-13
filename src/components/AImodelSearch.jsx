import React,{useState,useEffect} from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import  AnimatedPage from './AnimatedPage.jsx';
import './search.css';
import './bruh.css';
import { BrowserRouter,Routes,Route,useNavigate,useSearchParams,useLocation} from 'react-router-dom';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

function AImodelSearch(){
    const [query,setQuery] = useState('');
    //const [results,setResult] = useState([]);
    //const [searchParams,setSearchParams] = useSearchParams('/search');
    const navigate = useNavigate();
    const handleSearch = async (event) => {
        event.preventDefault();
        //const response = await axios.get(`http://127.0.0.1:5000/search?query=${query}`);
        //console.log(response.data);
        //setResult(response.data);
        console.log("query submitted",query);
        navigate(`/search?query=${query}`)
        
        

       
        

    };
    return (
        <div className="box">
            <form onSubmit={handleSearch} >
            <div className="bruh">
                <input type="text"  value={query} onChange={(e)=>setQuery(e.target.value)}  placeholder="Search for AI models"  ></input>
                <button type="submit" style={{border:'none',background:'none',cursor:'pointer',color:'white'}} > 
                <i className="fas fa-search"></i>
                </button>    
            </div>
            </form>
        </div>
    )
}

const SearchResult =  () => {
    const query =  useQuery().get('query');
    const [res,setRes] = useState([]);
    const [err,setError] = useState(null)
   useEffect(()=>{
    
    const dataFetch = async()=>{
        
        try{
            
            const response = await axios.get(`http://127.0.0.1:5000/search?query=${query}`)
            console.log(response.data);
            setRes(response.data)
            }catch(error){
                console.log(`Error fetching data ${error}`);
                setError(error);
            }
      
        
    };
    dataFetch();
   },[query]);
   if(err){
    return <p>{err}</p>
}
    return (
        <>
                {res?(
                    
                    <div id="frontpage">
                     {res.map((models,index)=>(
                        <div key={index} className="modelInfo">
                            <img  src={models.imageURL} alt={models.model_name}/>
                            <h3>{models.model_name}</h3>
                            <p>{models.model_isFree}</p>
                            <p >{models.description}</p>
                            <a href={models.link}>Learn More</a>
                        </div>
                     ))}
                    </div>
                    
                ):(
                    
                        <p>No Results Found</p>
                    
                )}

        </>
        
    )
}
export {AImodelSearch,SearchResult};