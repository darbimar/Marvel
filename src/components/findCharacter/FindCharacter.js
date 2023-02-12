import './findCharacter.scss'
import './../../style/button.scss'
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import useMarvelService from '../../services/MarvelService';
import CharacterInfo from '../CharacterPage/CharacterInfo';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { useState } from 'react';



function FindCharacter() {

    const [char, setChar] = useState(null);
    const {loading, error, getCharacterByName, clearError} = useMarvelService();

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = (name) => {
        clearError();

        getCharacterByName(name)
            .then(onCharLoaded);
    }

    const errorMessage = error ? <div className='character__error-crit'><ErrorMessage/></div> : null;
    const results = !char ? null : char.length > 0 ?
        <div className="character__page">
            <div className="character__succes">There is! Visit {char[0].name} page!</div>
            <Link to={`/characters/${char[0].id}`} className="button button__secondary">
                <div className="inner">To page</div>
            </Link>
        </div> :
        <div className="character__error">
            The character was not found. Check the name try again
        </div>


    return (
        <div className="character">
            <h3>Or find a character by name:</h3>
            <Formik
                initialValues={{ name: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                    errors.name = 'This field is required';
                    } 
                    return errors;
                }}
                onSubmit={({ name }) => {
                    updateChar(name);
                    }}
                className="character__input">
                {({ isSubmitting }) => (
                <Form >
                <Field 
                    type="text" 
                    name="name"/>
                 <button 
                    type='submit' 
                    className="button button__main"
                    disabled={loading}>
                    <div className="inner">find</div>
                </button>
                <FormikErrorMessage name="name" component="div" className='character__error'/>
                </Form>
        )}
            </Formik>
            {results}
            {errorMessage}
        </div>
    )
}

export default FindCharacter;