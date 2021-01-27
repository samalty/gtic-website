import React from 'react';
import './styles/Cursor.scss';

const Cursor = () => {
    const cursorRef = React.useRef(null);
    React.useEffect(() => {
        const onMouseMove = (event) => {
            const { clientX, clientY } = event;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }
        document.addEventListener('mousemove', onMouseMove);
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        }
    }, [])
    return <div className="cursor" ref={cursorRef} />;
};

export default Cursor;