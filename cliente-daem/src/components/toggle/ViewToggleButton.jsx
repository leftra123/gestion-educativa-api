import { FaTable, FaThLarge } from 'react-icons/fa';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

export function ViewToggleButton({ view, changeView }) {
    return (
        <div className="flex justify-center space-x-2">
            <Tippy content="Vista de tarjetas">
                <button onClick={() => changeView('card')} className="p-2 rounded-md hover:bg-indigo-100 focus:outline-none">
                    <FaThLarge className={`text-2xl ${view === 'card' ? 'text-indigo-600' : 'text-gray-400'}`} />
                </button>
            </Tippy>
            <Tippy content="Vista de lista">
                <button onClick={() => changeView('table')} className="p-2 rounded-md hover:bg-indigo-100 focus:outline-none">
                    <FaTable className={`text-2xl ${view === 'table' ? 'text-indigo-600' : 'text-gray-400'}`} />
                </button>
            </Tippy>
        </div>
    );
}
