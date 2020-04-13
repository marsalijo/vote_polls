import React from 'react'
import axios from 'axios';

export default function Choices({ choiceData, voteHandler }) {

    const clickHandler = async (url, selectedChoice) => {
        await axios.post(
            `https://polls.apiblueprint.org${url}`,
        );
        voteHandler(selectedChoice)

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
                            <span>{votes}</span>
                            <span>{percent}%</span>
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
