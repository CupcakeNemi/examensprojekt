const TutorialDetails = ({tutorial}) => {
    return(
        <div className="tutorialDetails">
            <h2>{tutorial.title}</h2>
            <h3>{tutorial.stepsTitle}</h3>
            <p>{tutorial.steps}</p>
        </div>
    )
}

export default TutorialDetails;