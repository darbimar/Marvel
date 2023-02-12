import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import Page404 from "../pages/404";
import ComicsPage from "../pages/ComicsPage";
import MainPage from "../pages/MainPage";
import SingleComicPage from "../pages/SingleComic";
import CharacterPage from "../pages/CharacterPage";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import app from './app.scss'

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <TransitionGroup component={null}>
                            <CSSTransition 
                            timeout={200} 
                            classNames="fade">
                    <Routes>
                        
                                <Route path="/" element={<MainPage/>}/>
                            <Route path="/comics" element={<ComicsPage/>}/>
                            <Route path="/comics/:comicId" element={<SingleComicPage/>} />
                            <Route path="/*" element={<Page404/>}/>
                            <Route path="/characters/:id" element={<CharacterPage/>}/>
                        
                        
                    </Routes>
                    </CSSTransition>
                    </TransitionGroup>
                </main>
            </div>
        </Router>
    )

    
}

export default App;