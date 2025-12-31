# Ionic Angular Course Project

This project is a simple recipe management app built with **Ionic** and **Angular**. It demonstrates the use of Ionic components, Angular services, and routing to create a dynamic and interactive user experience.

## Features

- **Recipe List**: Displays a list of recipes with their titles and images.
- **Recipe Details**: View detailed information about a recipe, including its ingredients.
- **Delete Recipes**: Delete a recipe from the list with a confirmation dialog.
- **Routing**: Navigate between the recipe list and recipe detail pages.
- **Responsive Design**: Built with Ionic's responsive components for mobile-first design.

## Project Structure

- **Recipes Module**: Contains the main functionality of the app.
  - `recipes.page.ts`: Displays the list of recipes.
  - `recipe-detail.page.ts`: Displays details of a selected recipe.
  - `recipes.service.ts`: Manages the recipe data and provides methods like `getAllRecipes()` and `deleteRecipe()`.
  - `recipe-item.component.ts`: A feature-specific component for displaying individual recipes in the list.

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   ionic serve
   ```
3. Open the app in your browser at http://localhost:8100.
