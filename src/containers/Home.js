import React, { useEffect, useState } from 'react';
import axios from 'axios';

//components
import Question from '../components/Question'



const Home = () => {

    const [data, setData] = useState({});

    //Getting all questions and set them to state
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(
                    `${process.env.REACT_APP_API_URL}/questions`,
                );
                console.log('home', result);
                setData(result.data);

            } catch(error) {
                console.error('error:', error)
            }
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

export default Home;