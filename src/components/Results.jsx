import React, { useEffect, useState } from "react";
import scissors from "../assets/icon-scissors.svg";
import lizard from "../assets/icon-lizard.svg";
import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import spock from "../assets/icon-spock.svg";
import "./results.css";

function Results(props) {
    const { userOption, houseOption, setScore } = props;
    const [results, setResults] = useState("");
    const [isButton, setIsButton] = useState(false);

    useEffect(() => {
        determineWinner();
    }, [houseOption]);

    const determineWinner = () => {
        if (houseOption === "") {
            setResults("");
        } else {
            if (userOption === houseOption) {
                setResults("IT'S A TIE");
                setIsButton(true);
            } else if (
                (userOption === "scissors" && houseOption === "paper") ||
                (userOption === "scissors" && houseOption === "lizard") ||
                (userOption === "paper" && houseOption === "rock") ||
                (userOption === "paper" && houseOption === "spock") ||
                (userOption === "lizard" && houseOption === "spock") ||
                (userOption === "lizard" && houseOption === "paper") ||
                (userOption === "spock" && houseOption === "scissors") ||
                (userOption === "spock" && houseOption === "rock") ||
                (userOption === "rock" && houseOption === "scissors") ||
                (userOption === "rock" && houseOption === "lizard")
            ) {
                props.setScore((prevScore) => prevScore + 1);
                setResults("YOU WIN");
                setIsButton(true);
            } else {
                props.setScore((prevScore) => prevScore - 1);
                setResults("YOU LOSE");
                setIsButton(true);
            }
        }
    };

    const playAgain = () => {
        props.setUserOption(null);
        props.setHouseOption("");
        setResults("");
        setIsButton(false);
        props.setIsUserChoice((currentValue) => {
            console.log(currentValue);
            return !currentValue;
        });
    };
    return (
        <div>
            <div className="picks">
                <div className="choose">
                    <h2>YOU PICKED</h2>
                    <div className={`circle ${userOption}`}><img src={eval(userOption)} alt="" /></div>
                </div>
                <div className="results-container">
                    <h2>{results}</h2>
                    <div className={isButton ? "button-game" : "button-none"}>
                        <button className="btn-width" onClick={playAgain}>PLAY AGAIN</button>
                    </div>
                </div>

                <div className="choose">
                    <h2>THE HOUSE PICKED</h2>
                    <div className={`circle ${houseOption}`}><img src={eval(houseOption)} alt="" /></div>

                </div>
            </div>


        </div>
    );
}

export default Results;