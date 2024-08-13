const modelData = [
    {
        "model_name":"GPT_3",
        "description":"An AI that generates human-like text.",
        "model_isFree":"Yes",
        "imageURL":"",
        "link":"https://www.openai.com/chatgpt"
    },
    {
        "model_name":"DALL_E",
         "description":"An AI that generates images from textual descriptions.",
        "model_isFree":"Not Free",
        "imageURL":"",
        "link":"https://www.openai.com/dall-e-2"
    },
    {
        "model_name":"DeepArt",
        "description":"",
        "model_isFree":"An AI that transforms photos into artworks",
        "imageURL":"",
        "link":"https://deepai.org/art"
    },
    {
        "model_name":"Midjourney",
        "description":"Generates images from natural language descriptions, called prompts, similar to OpenAI's DALL-E and Stability AI's Stable Diffusion",
        "model_isFree":"Not free",
        "imageURL":"",
        "link":"https://www.midjourney.com/"
    },
]

const frontPage = async (info)=>{
    const getCont = document.getElementById('container');
    const newElement = document.createElement('div');
    newElement.className = 'modelInfo';
    
    info.map((models)=>{
        const newElement = document.createElement('div');
        newElement.className = 'modelInfo';
        newElement.innerHTML = `<img src=${models.imageURL}/ alt=${models.model_name}>
                                <h3>${models.model_name}</h3>    
                                <p>${models.model_isFree}</p>
                                <p>${models.description}</p>
                                <a href=${models.link}>Learn More</a>`;
        getCont.appendChild('modelInfo');
        console.log(newElement);
    })
}
document.addEventListener('dblclick',() => frontPage(modelData))