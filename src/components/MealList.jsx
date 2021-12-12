import { useNavigate } from 'react-router-dom';
import { MealItem } from './MealItem';
function MealList({ meals }) {
    let navigate = useNavigate();
    return (
        <div>
            <button className="btn" onClick={() => navigate(-1)}>
                {' '}
                Назад{' '}
            </button>
            <div className="list">
                {meals.map((meal) => (
                    <MealItem key={meal.idMeal} {...meal} />
                ))}
            </div>
        </div>
    );
}
export { MealList };
