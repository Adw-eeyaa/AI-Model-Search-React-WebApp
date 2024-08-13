import React,{useState} from 'react';
import Navbar from './components/Navbar';
import RecommendationForm from './components/RecommendationForm';
import RecommendationResult from './components/RecommendationResult';
import {AImodelSearch,SearchResult} from './components/AImodelSearch';
import AnimatedPage from './components/AnimatedPage';
import './App.css';
import './style.css';
import './components/bruh.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//import './components/AnimatedPage';
const ModelSearch = (kek)=>{
  const modelData = [
    {
        "model_name":"GPT_3",
        "description":"An AI that generates human-like text.",
        "model_isFree":"Yes",
        "imageURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdE9hQ7YxRW9tb6F80bL73Fm49ubS10J8wug&s",
        "link":"https://www.openai.com/chatgpt"
    },
    {
        "model_name":"DALL_E",
         "description":"An AI that generates images from textual descriptions.",
        "model_isFree":"Not Free",
        "imageURL":"https://9meters.com/wp-content/uploads/dall-e-logo.webp",
        "link":"https://www.openai.com/dall-e-2"
    },
    {
        "model_name":"DeepArt",
        "description":"",
        "model_isFree":"An AI that transforms photos into artworks",
        "imageURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLQr6t92QS_ojh1S-1dMvXHmNui4rJFJfRA&s",
        "link":"https://deepai.org/art"
    },
    {
        "model_name":"Midjourney",
        "description":"Generates images from natural language descriptions, called prompts, similar to OpenAI's DALL-E and Stability AI's Stable Diffusion",
        "model_isFree":"Not free",
        "imageURL":"https://media.licdn.com/dms/image/D5612AQG77Rlgtqa93g/article-cover_image-shrink_600_2000/0/1704255099294?e=2147483647&v=beta&t=ZdSkdjXkdgYufyXbqDVNuJ-Trk5Og2eY53isGBidwYw",
        "link":"https://www.midjourney.com/"
    },
    {
        "model_name":"GPT_3",
        "description":"An AI that generates human-like text.",
        "model_isFree":"Yes",
        "imageURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdE9hQ7YxRW9tb6F80bL73Fm49ubS10J8wug&s",
        "link":"https://www.openai.com/chatgpt"
    },
    {
        "model_name":"DALL_E",
         "description":"An AI that generates images from textual descriptions.",
        "model_isFree":"Not Free",
        "imageURL":"https://9meters.com/wp-content/uploads/dall-e-logo.webp",
        "link":"https://www.openai.com/dall-e-2"
    },
    {
        "model_name":"DeepArt",
        "description":"",
        "model_isFree":"An AI that transforms photos into artworks",
        "imageURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLQr6t92QS_ojh1S-1dMvXHmNui4rJFJfRA&s",
        "link":"https://deepai.org/art"
    },
    {
        "model_name":"Midjourney",
        "description":"Generates images from natural language descriptions, called prompts, similar to OpenAI's DALL-E and Stability AI's Stable Diffusion",
        "model_isFree":"Not free",
        "imageURL":"https://media.licdn.com/dms/image/D5612AQG77Rlgtqa93g/article-cover_image-shrink_600_2000/0/1704255099294?e=2147483647&v=beta&t=ZdSkdjXkdgYufyXbqDVNuJ-Trk5Og2eY53isGBidwYw",
        "link":"https://www.midjourney.com/"
    },
]

return(
  <>
  <AnimatedPage>
  <div id="frontpage">
    {modelData.map((models,index)=>(
      <>
      <div key={index} className="modelInfo">
      <img  src={models.imageURL} alt={models.model_name}/>
      <h3>{models.model_name}</h3>
      <p>{models.model_isFree}</p>
      <p >{models.description}</p>
      <a href={models.link}>Learn More</a>
      </div>
      </>
    ))}
  </div>
  </AnimatedPage>
</>
)


}


const App = () =>{
  const [recommendation,setRecommendation] = useState('');
  
  return (
  <>
  
  <div className="App">
   
    <Navbar/>
    
    <BrowserRouter>
        <Routes>
          <Route exact index element={<div className="App"><div><AImodelSearch /><div style={{paddingTop:"200px"}} ><ModelSearch /></div></div></div>}/>
          <Route exact path="/Tech-Stack-Recommender" element={<> <div style={{height:"100vh"}}><RecommendationForm setRecommendation={setRecommendation} />  <RecommendationResult recommendation={recommendation}  /> </div>    </>}/>
          <Route path="/Site-scanner" />
          <Route  path="/search" element={<><AImodelSearch/><div style={{height:"100vh",padding:"200px",overflow:"auto"}}><AnimatedPage><SearchResult/></AnimatedPage></div></>}/>
        </Routes>
    
    </BrowserRouter>
    
    

    
    
  
    </div>
  </>
  
  );

};

export default App;