
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";

import axiosWithAuth from "../utils/axiosWithAuth";

const RecipeFormStyles = styled.div`
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // height: 100vh;

    .recipe-form {
        min-width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .recipe-form label {
        padding-right: 1%;
        padding-left: 42%;
        display: flex;
        flex-direction: column;
        width: 16vw;
        align-items: center;
        justify-content: center;
    }

    button {
        margin-top: 1%
    }
    `

const initialRecipe = {
    title: '',
    source: '',
    ingredients: '',
    instructions: '',
    category: ''
}

const RecipeForm = () => {
    const [recipe, setRecipe] = useState(initialRecipe);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleChange = e => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/homepage');
        // axios.put(`https://bldwk-scrt-rec-api.herokuapp.com//api/recipes/${id}}`, recipe)
        //     .then(res => {
        //         setRecipe(res.data);
        //          navigate('/homepage')
        //     })
    };



    return (
        <RecipeFormStyles>
        <div className="recipe-form"> 
        <h2>Add a New Recipe:</h2>
            <form onSubmit={handleSubmit}>
                <label className="label"> Title: 
                    <input 
                        type='text'
                        name='title'
                        id='title-name'
                        onChange={handleChange}
                        value={recipe.title}
                    />
                </label>
                <label className="label"> Source: 
                    <input 
                        type='text'
                        name='source'
                        id='source-name'
                        onChange={handleChange}
                        value={recipe.source}
                    />
                </label>
                <label className="label"> Indgredients: 
                    <input 
                        type='text'
                        name='ingredients'
                        id='ingredients-name'
                        onChange={handleChange}
                        value={recipe.ingredients}
                    />
                </label>
                <label className="label"> Instructions: 
                    <input 
                        type='text'
                        name='instructions'
                        id='instructions-name'
                        onChange={handleChange}
                        value={recipe.instructions}
                    />
                </label>
                <label className="label"> Category: 
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
        </RecipeFormStyles>
    )
};

export default RecipeForm;