import React, { useEffect, useState } from 'react';
import safeAjaxWrapper from '../utils/ajaxWrapper';

//components
import Choices from './Choices'

//utils
import calcPercent from '../utils/calcPercent';



const QuestionDetail = ({ match }) => {

    const [detail, setDetail] = useState({});

    const clickHandler = (selectedChoice) => {
        //finding the index of selected choice in choices array
        let selectedChoiceIndex = detail.choices.findIndex((item)=>item.choice === selectedChoice.choice)

        //update the amount of votes for selected choice
        let newChoices = [...detail.choices];
        newChoices[selectedChoiceIndex].votes += 1;
        newChoices = calcPercent(newChoices)
        //set new amount to state
        setDetail({
            ...detail,
            choices: newChoices,
        })
    }

    //Call clicked question API and set it's data to state
    useEffect(() => {
        const fetchQuestion = async () => {
            const result = await safeAjaxWrapper(`${process.env.REACT_APP_API_URL}/questions/${match.params.id}`)

            //Calculate choices percentage
            let newChoices = result.data.choices
            newChoices = calcPercent(newChoices)
            //Set data to state
            setDetail({
                ...result.data,
                choices: newChoices
            });  
        };
        fetchQuestion();
    }, [match.params.id]);



    return (
        <div>
            <h2>Questions Detail</h2>
            {Object.keys(detail).length !== 0 ?
                <>
                    <h3>Question: {detail.question}</h3>
                    {detail.choices &&
                        <Choices 
                            choiceData={detail.choices}
                            voteHandler={clickHandler}
                        />
                    }
                    
                </>
                :
                <span>Loading...</span>
            }
        </div>
            
            
            
       
    )
}

export default QuestionDetail;