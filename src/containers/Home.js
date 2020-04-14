import React, { useEffect, useState } from 'react';
import axios from 'axios';

//components
import Question from '../components/Question'



export default function Home() {

    const [data, setData] = useState({});

    //Getting all questions and set them to state
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://polls.apiblueprint.org/questions',
            );
            setData(result.data);
        };
        fetchData();
    }, []);


    return (
        <>
            <h2>Questions</h2>
            <div className="questions-wrapper">
                {data.length && data.map((item, index) => (
                    <Question
                        key={index}
                        itemData={item}
                    />
                ))}
            </div>
        </>
    )
}
