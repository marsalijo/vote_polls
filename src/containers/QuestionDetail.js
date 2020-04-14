import React, { useEffect, useState } from 'react';
import axios from 'axios';

//components
import Choices from './Choices'

//utils
import calcPercent from '../utils/calcPercent';



export default function QuestionDetail({ match }) {

    const [detail, setDetail] = useState({});

    const clickHandler = (selectedChoice) => {
        //finding the index of selected choice in choices array
        let selectedChoiceIndex;
        for(let i = 0; i < detail.choices.length; i++) {
            if (detail.choices[i].choice === selectedChoice.choice) {
                selectedChoiceIndex = i;
                break;
            }
        }
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
            const result = await axios(
                `https://polls.apiblueprint.org/questions/${match.params.id}`,
            );
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
            {detail &&
                <>
                    <h3>Question: {detail.question}</h3>
                    {detail.choices && 
                        <Choices 
                            choiceData={detail.choices}
                            voteHandler={clickHandler}
                        />
                    }
                    
                </>}
        </div>
            
            
            
       
    )
}
