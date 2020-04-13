import React from 'react'
import {Link} from 'react-router-dom';

export default function Question({ itemData }) {
    const { question, published_at, choices, url } = itemData;
    return (
        <Link to={url} className="question">
            <h3>{question}</h3>
            <small>{published_at}</small>
            <span>{choices.length}</span>
        </Link>
    )
}
