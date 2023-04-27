import { TutorialContext } from "../context/TutorialContext";
import { useContext } from "react";

export const useTutorialContext = () => {
    const context = useContext(TutorialContext);

    if (!context) {
        throw Error("context error")
    }

    return context;
}