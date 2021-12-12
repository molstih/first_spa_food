import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealByID } from '../api';
import { Preloader } from '../components/Preloader';

function Recipe() {
    const [recipe, setRecipe] = useState({});
    let navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        getMealByID(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);
    return (
        <div>
            <button className="btn" onClick={() => navigate(-1)}>
                Назад
            </button>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className="Recipe">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h2>{recipe.strMeal}</h2>
                    <h6>
                        <b>Category:</b> {recipe.strCategory}
                    </h6>
                    {recipe.strArea ? (
                        <h6>
                            <b>Area:</b> {recipe.strArea}
                        </h6>
                    ) : (
                        <></>
                    )}
                    <p>
                        <b>Instructions:</b> {recipe.strInstructions}
                    </p>

                    <table className="centerd">
                        <thead>
                            <tr>
                                <th>Ingridients</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map((key) => {
                                if (key.includes('Ingredient') && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>
                                                {
                                                    recipe[
                                                        `strMeasure${key.slice(
                                                            13
                                                        )}`
                                                    ]
                                                }
                                            </td>
                                        </tr>
                                    );
                                }
                            })}
                        </tbody>
                    </table>

                    {recipe.strYoutube ? (
                        <div className="row">
                            <h5>Video Recipe</h5>
                            <iframe
                                title={id}
                                src={`https://www.youtube.com/embed/${
                                    recipe.strYoutube.split('=')[1]
                                }`}
                            ></iframe>
                        </div>
                    ) : null}
                </div>
            )}
        </div>
    );
}
export { Recipe };
