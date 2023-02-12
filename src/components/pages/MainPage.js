import { useState } from "react";
import { Helmet } from "react-helmet";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from '../../resources/img/vision.png';
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import FindCharacter from "../findCharacter/FindCharacter";


const MainPage = () => {

    const [selectedChar, setChar] = useState('');

    const onCharSelected = (id) => {
        setChar(id);
    } 

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"
                    />
                <title>Marvel information </title>
            </Helmet>
            <ErrorBoundary>
                    <RandomChar/>
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected}/>
                </ErrorBoundary>
                <div>
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar} />
                    </ErrorBoundary> 
                    <ErrorBoundary>
                        <FindCharacter />
                    </ErrorBoundary>
                </div>              
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;