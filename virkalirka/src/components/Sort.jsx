import React, { useState, useEffect } from 'react';
import URL from '../backendURL';
import { useAuthContext } from "../hooks/useAuthContext";
import { useTutorialContext } from '../hooks/useTutorialContext';

const TutorialList = () => {
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const [tutorials, setTutorials] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        if (selectedDifficulty) {
            fetch(`${URL}/api/tutorials`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    setTutorials(data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [selectedDifficulty]);

    const handleDifficultyClick = (difficulty) => {
        setSelectedDifficulty(difficulty);
        console.log(difficulty, "svårt eller?")

    };
    const image = `${URL}/static/${tutorials.filename}`;
    return (
        <div>
            <h3>Tutorial List</h3>
            <div>
                <button onClick={() => handleDifficultyClick('Easy')}>Easy</button>
                <button onClick={() => handleDifficultyClick('Medium')}>Medium</button>
                <button onClick={() => handleDifficultyClick('Hard')}>Hard</button>
            </div>
            <div>
                {tutorials.map(tutorial => {

                    if (tutorial.difficulty === selectedDifficulty) {
                        return (
                            <div className='flexDiv'>
                                <div className="tutorialDetails">
                                    <img src={image} alt="of the project" className='content-img' />
                                    <h2 >{tutorial.title}</h2>
                                    <small className='difficulty' >{tutorial.difficulty}</small>
                                    {/* <small className='postedBy' >{tutorial.postedBy}</small> */}
                                </div>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
};

export default TutorialList;