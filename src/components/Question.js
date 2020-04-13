import React from 'react'
import {Link} from 'react-router-dom';

export default function Question({ itemData }) {
    const { question, published_at, choices, url } = itemData;
    return (
        <Link to={url} className="question">
            <h2>{question}</h2>
            <small>{published_at}</small>
            <span>{choices.length}</span>
        </Link>
    )
}
