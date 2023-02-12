import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import './characterInfo.scss';

function CharacterInfo () {

    const {id} = useParams();
    const [character, setCharacter] = useState(null);
    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateCharacter();
    }, [id]);

    const updateCharacter = () => {
        clearError();
        getCharacter(id)
            .then(onCharacterLoaded);
    }

    const onCharacterLoaded = (character) => {
        setCharacter(character);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error ||  !character) ?  <View character={character}/> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>

    )
}

const View = ({character}) => {

    const {name, description, thumbnail} = character;

    return (
        <div className="character-info">
            <Helmet>
                <meta
                    name="description"
                    content={`Page about ${name}`}
                    />
                <title>{name}</title>
            </Helmet>
            <img src={thumbnail} alt={name} className="character-info__img"/>
            <div className="character-info__text">
                <h2 className="character-info__name">{name}</h2>
                <p className="character-info__descr">{description}</p>
            </div>
        </div>
    )
}

export default CharacterInfo;


