import React from 'react'
import {Link} from 'react-router-dom';

export default function Question({ itemData }) {
    const { question, published_at, choices, url } = itemData;
    return (
        <Link to={url} className="question">
            <h3>{question}</h3>
            <small>Published at: {published_at.replace(/(\d{4})-(\d{2})-(\d{2}).*/, '$3-$2-$1')}</small>
            <span>Number of choices: {choices.length}</span>
        </Link>
    )
}
