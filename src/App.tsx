import './styles/global.css';
import './styles/theme.css';

import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
    
    return (
        <>
            <Heading >A Game of Thrones
                <button><TimerIcon />
                </button>
            </Heading>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt optio aliquid consequuntur illo vero omnis vitae minus officiis ut, pariatur iure cumque natus numquam tenetur cum eum. Provident, accusantium corporis.</p>
        </>
    );
}


