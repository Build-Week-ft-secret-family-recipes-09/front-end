import React from "react"
import "./HomePage.css"
// will later get passed in as props

const testRecipes = [
    {
        title: 'title one',
        source: 'source one',
        ingredients: 'ingredients one',
        instructions: 'instructions one',
        category: 'category one'
    },
    {
        title: 'title two',
        source: 'source two',
        ingredients: 'ingredients two',
        instructions: 'instructions two',
        category: 'category two'
    },
    {
        title: 'title three',
        source: 'source three',
        ingredients: 'ingredients three',
        instructions: 'instructions three',
        category: 'category three'
    },
]






const HomePage = (props) => {
    // creates a list of recipes that will render
    const recipeList = testRecipes.map(e=>
        <div className="recipe" key={e.title}>
           <p>{e.title}</p> 
           <p>{e.source}</p>
           <p>{e.ingredients}</p> 
           <p>{e.instructions}</p>
           <p>{e.category}</p>
        </div>
        )
    return (
        <div>
            <h1>Recipes</h1>
            <div className="recipesContainer">
                {recipeList}
            </div>
        </div>
    );
}

export default HomePage; 