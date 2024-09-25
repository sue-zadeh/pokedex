# Pokedex

## Project Overview:
This Pokémon Pokédex web application was built in a **Linux environment (Ubuntu)**, using **React.js (Vite)** for the frontend and **Flask with a REST API** for the backend. The application serves as an interactive Pokémon gallery that allows users to search, filter, and explore detailed Pokémon information. The project demonstrates modern UI/UX principles, clean coding practices, and solid error-handling mechanisms.

## Technologies Used:
- **Frontend**: React.js (Vite), TypeScript, Bootstrap, AOS (for animations)
- **Backend**: Flask (Python) with REST API integration
- **Environment**: Linux (Ubuntu)
- **Hosting**: The project will be hosted on Railway or another hosting service to allow easy access and navigation.

## Features:

### 1. Home Page:
- Displays an interactive Pokémon gallery with a search bar for filtering Pokémon by name or ID.
- The navigation bar includes links to the Pokémon Gallery and Advanced Search functionalities.
- Users can sort Pokémon by name or ID, and a responsive design ensures a great experience across devices.
- An application icon has been added, which appears on the browser tab when the project is opened.

### 2. Pokémon Gallery Page:
- Displays a list of Pokémon with their names, images, and IDs.
- Users can apply **Advanced Search & Filters** to explore Pokémon based on their **Type**, **Height**, **Weight**, **Ability**, **Area**, and **Number**.
- **Sort Options**: Sort Pokémon by **Name**, **ID**, **Height**, and **Weight**.
- **Show More**: Pokémon are displayed incrementally, and users can click a "Show More" button to load additional Pokémon (**10 more Pokémon each time**).
- **Pagination**: Ensures the interface remains clean and responsive as users explore the gallery.

### 3. Advanced Search Page:
- Allows users to perform detailed searches based on **Type**, **Ability**, **Area**, and more.
- The search results dynamically update the gallery in real-time.
- **Limitations**: Some advanced search logic for **Height**, **Weight**, and other features may not work as expected due to API restrictions. The code is structured to support these features if the API provides the necessary data in the future.

### 4. Pokémon Details Page:
- Displays detailed information about individual Pokémon, including height, weight, type, and an English description fetched from the Species API.
- Users can click on a Pokémon's type to view more Pokémon of the same type in the gallery.

### 5. Error Handling and Code Structure:
- **Good Error Handling** is implemented throughout the project, especially when fetching data from the API.
- The code adheres to **clean, maintainable standards**, ensuring DRY (Don’t Repeat Yourself) principles, making it easy to extend and scale.
- **Responsive Design**: Built using Bootstrap to provide an excellent experience across devices, from mobile to desktop.

### 6. Wireframes & Visuals:
- Wireframes were created for the application’s structure and layout and included in the `public/assets` folder in the repository.
- The folder also contains screenshots of various pages to provide a visual overview of the project for those who might not have time to run the application locally.

## Folder Structure:
- **client/api**: Contains the API fetching logic, including `pokedexapi.ts` for fetching Pokémon data.
- **client/components**: Contains reusable React components like `navbar.tsx`, `pokemonCard.tsx`, `AdvancedSearch.tsx`, etc.
- **client/pages**: Contains page-level components like `home.tsx` and `PokemonGallery.tsx`.
- **public/assets**: Contains wireframes and screenshots of the application for easy reference.
  - Includes images such as `home page.png`, `Pokemon Gallery.png`, and wireframes like `home-gallery-wireframes.jpg`.
- **app.py**: it is the backend Flask application (`app.py`), which serves as the REST API endpoint.

## Key Considerations:
- **API Limitations**: The sorting by height and weight had some limitations due to the API not supporting these features directly. The logic is in place, and should the API improve, the features will work seamlessly.
- **Error Handling**: I prioritized robust error handling to ensure that the user experience remains smooth even if there are issues with the API.
- **Clean Code**: Emphasis on readability, maintainability, and adhering to modern coding practices to make the project scalable.

## Next Steps:
The project will be hosted for easier access, and I will share the link once it is live. Meanwhile, you can explore the code, wireframes, and screenshots in the `public/assets` folder of the project repository.
