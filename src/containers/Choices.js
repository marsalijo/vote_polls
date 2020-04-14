import React, { useState } from 'react'
import axios from 'axios';



const Choices = ({ choiceData, voteHandler }) => {

    const [isLoading, setIsLoading] = useState(false);

    //Vote on a choice by clicking on it and calling the vote API of it
    const clickHandler = async (url, selectedChoice) => {
        setIsLoading(true);
        try {
            await axios.post(
                `${process.env.REACT_APP_API_URL}${url}`,
            )
            //By calling voteHandler we call the setDetail 
            //which is passed down from parent component  
            voteHandler(selectedChoice);
            setIsLoading(false);
        } catch(error) {
            console.error('error:', error)
        }

      }


    return (
        <ul>
            {choiceData && 
                choiceData.map((item, index) => {
                    const { choice, votes, url, percent } = item
                    const styles = { 
                        transform: `translateX(${-(100-percent)}%)` 
                    };
                    return (
                        <li className="choice-wrapper" key={index} onClick={() => clickHandler(url, item)} >
                            <span>{choice}</span>
                            
                            
                                {isLoading ? 
                                    <>
                                        <span>Loading...</span>
                                        <span>Loading...</span>
                                    </>
                                :
                                    <>
                                        <span>{percent}%</span>
                                        <span>{votes}</span>
                                    </>
                                }
                                
                            <div className="progress-root">
                                <div className="progress-bar" style={styles}>
                                </div>
                            </div>
                        </li>
                    )
                }
                )
            }
        </ul>
    )
}

export default Choices;
