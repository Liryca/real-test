
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../useSelectorTyped';
import { addElem, changeElem, deleteElem } from '../store/action';
import { Elem } from '../store/reducer';
import './List.css';

function randomInteger(min: number, max: number) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const List = () => {
    const dispatch = useAppDispatch();
    const list = useAppSelector(state => state.list);

    useEffect(() => {
        list.forEach((element: Elem) => {
            if (element.time === 0) {
                dispatch(deleteElem(element))
            }
        });
        const timer = setInterval(() => dispatch(changeElem()), 1000)
        if (!list.length) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);

    }, [dispatch, list]);

    function addElement() {
        dispatch(addElem({ time: randomInteger(10, 30) }))
    }

    return (
        <div>
            <button onClick={addElement}>Добавить элемент</button>
            <ul>
                {list.map((elem: Elem, index: number) => {
                    return <li key={index}>{index + 1}. Исчезнет через: {elem.time} секунд</li>
                })}
            </ul>
        </div>
    );
};

export default List;

