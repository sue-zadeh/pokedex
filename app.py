from flask import Flask, jsonify
import requests

app = Flask(__name__)

POKE_API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151"

@app.route('/api/pokemon', methods=['GET'])
def get_pokemon():
    response = requests.get(POKE_API_URL)
    print(response.json())  # Debug: print data to ensure it's correct
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({"error": "Failed to fetch data"}), 500

@app.route('/api/pokemon/<int:id>', methods=['GET'])
def get_pokemon_detail(id):
    response = requests.get(f"https://pokeapi.co/api/v2/pokemon/{id}")
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({"error": "Failed to fetch Pokémon details"}), 500

if __name__ == '__main__':
    app.run(debug=True)
