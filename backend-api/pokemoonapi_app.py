import requests
from flask import Flask, jsonify

app = Flask(__name__)

# Fetch Pokémon data from PokéAPI and cache it
@app.route('/api/pokemon', methods=['GET'])
def get_pokemon():
    url = "https://pokeapi.co/api/v2/pokemon?limit=151"
    response = requests.get(url)
    pokemons = response.json()['results']
    
    pokemon_data = []
    
    for pokemon in pokemons:
        details = requests.get(pokemon['url']).json()
        pokemon_data.append({
            'id': details['id'],
            'name': details['name'],
            'type': [t['type']['name'] for t in details['types']],
            'height': details['height'],
            'weight': details['weight'],
            'image': details['sprites']['front_default']
        })
    
    return jsonify(pokemon_data)

if __name__ == '__main__':
    app.run(debug=True)
