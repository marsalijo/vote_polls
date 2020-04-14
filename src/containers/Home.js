import React, { useEffect, useState } from 'react';
import safeAjaxWrapper from '../utils/ajaxWrapper';

//components
import Question from '../components/Question'



const Home = () => {

    const [data, setData] = useState({});

    //Getting all questions and set them to state
    useEffect(() => {
        const fetchData = async () => {
            const result = await safeAjaxWrapper(`${process.env.REACT_APP_API_URL}/questions`)
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

export default Home;