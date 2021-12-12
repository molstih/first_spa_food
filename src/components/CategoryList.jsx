import { CategoryItem } from './CategoryItem';
function CategoryList({ catalog = [] }) {
    return (
        <div>
            <div className="list">
                {catalog.map((el) => (
                    <CategoryItem key={el.idCategory} {...el} />
                ))}
            </div>
        </div>
    );
}

export { CategoryList };
