from flask import Flask,request,  jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
data = [
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
@app.route('/search',methods=['GET'])
def search():
    query = request.args.get('query')
    if not query:
        return jsonify([])

    query_lower = query.lower()
    results = [item for item in data if query_lower in item['model_name'].lower()]
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)