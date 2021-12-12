import { useState } from 'react';
import { useParams } from 'react-router';

function Search(props) {
    const [value, setValue] = useState('');
    const { cb = Function.prototype } = props;

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type="search"
                    id="search"
                    placeholder="search"
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button
                    className="btn"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}
                    onClick={handleSubmit}
                >
                    Найти
                </button>
            </div>
        </div>
    );
}

export { Search };
