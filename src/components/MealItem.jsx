import { Link } from 'react-router-dom';
function MealItem(props) {
    const { strMeal, idMeal, strMealThumb } = props;
    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <span className="card-title">{strMeal}</span>
                <p>{strMeal.slice(0, 70)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/recipe/${idMeal}`} className="btn">
                    Watch recipe
                </Link>
            </div>
        </div>
    );
}

export { MealItem };
