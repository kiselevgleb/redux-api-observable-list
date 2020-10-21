import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Loader from 'react-loader';

export default function Skills() {
    const { items, loading, error, det } = useSelector(state => state.skills);

    if (loading) {
        return <Loader></Loader>;
    }
    if (error) {
        return <p className="error">Произошла ошибка!</p>;
    }
    return (
        <Fragment>
            <ul>
                <li key={det.id}>{det.name}</li>
                <li>{det.price}</li>
                <li>{det.content}</li>        
            </ul>
        </Fragment>
    )
}
