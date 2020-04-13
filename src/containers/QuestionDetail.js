import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function QuestionDetail({ match }) {

    const [detail, setDetail] = useState({});
    console.log('question:', detail)

    useEffect(() => {
        const fetchQuestion = async () => {
        const result = await axios(
            `https://polls.apiblueprint.org/questions/${match.params.id}`,
        );
        setDetail(result.data);
        };
        fetchQuestion();
    }, [match.params.id]);

    return (
        <div>
            <h2>Questions Detail</h2>
            {detail &&
                <>
                    <h3>Question: {detail.question}</h3>
                    <small>{detail.published_at}</small>
                    <ul>
                        {detail.choices && 
                            detail.choices.map((item, index) => <li key={index}>{item.choice}</li>)
                        }
                    </ul>
                </>}
        </div>
            
            
            
       
    )
}
