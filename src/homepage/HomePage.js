import React from "react"

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

    {
        title: 'title four',
        source: 'source three',
        ingredients: 'ingredients three',
        instructions: 'instructions three',
        category: 'category three'
    },  
    {
        title: 'title five',
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
           <p className="titleText">{e.title}</p> 
           <p className="nonTitle">{e.source}</p>
           <p className="nonTitle">{e.ingredients}</p> 
           <p className="nonTitle">{e.instructions}</p>
           <p className="nonTitle">{e.category}</p>
        </div>
        )
    return (
        <div>
            <h1 className="recipesH1">Recipes</h1>
            <div className="recipesContainer">
                {recipeList}
            </div>
        </div>
    );
}

export default HomePage; 