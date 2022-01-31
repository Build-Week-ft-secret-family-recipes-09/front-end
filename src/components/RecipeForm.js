import React, { useState } from "react";

const initialRecipe = {
    title: '',
    source: '',
    ingredients: '',
    instructions: '',
    category: ''
}

const RecipeForm = () => {
    const [recipe, setRecipe] = useState(initialRecipe);

    const handleChange = e => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
    };



    return (
        <div className="recipe-form"> 
            <h2>Add in New Recipe:</h2>
            <form>
                <label> Title: 
                    <input 
                        type='text'
                        name='title'
                        id='title-name'
                        onChange={handleChange}
                        value={recipe.title}
                    />
                </label>
                <label> Source: 
                    <input 
                        type='text'
                        name='source'
                        id='source-name'
                        onChange={handleChange}
                        value={recipe.source}
                    />
                </label>
                <label> indgredients: 
                    <input 
                        type='text'
                        name='ingredients'
                        id='ingredients-name'
                        onChange={handleChange}
                        value={recipe.ingredients}
                    />
                </label>
                <label> Instructions: 
                    <input 
                        type='text'
                        name='title'
                        id='title-name'
                        onChange={handleChange}
                        value={recipe.instructions}
                    />
                </label>
                <label> Category: 
                    <input 
                        type='text'
                        name='category'
                        id='category-name'
                        onChange={handleChange}
                        value={recipe.category}
                    />
                </label>
            <button className="submit-btn" onClick={handleSubmit}>Add Recipe</button>
            </form>
        </div>
    )
};

export default RecipeForm;