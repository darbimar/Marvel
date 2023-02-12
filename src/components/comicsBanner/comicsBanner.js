import './comicsBanner.scss';
import Avengers from '../../resources/img/Avengers.png';
import AvengersLogo from '../../resources/img/Avengers_logo.png';

const ComicsBanner = () => {
    return (
        <div className='comicsbanner'>
            <img src={Avengers} alt="Avengers" />
            <p className="comicsbanner__title">New comics every week! <br />Stay tuned!</p>
            <img src={AvengersLogo} alt="AvengersLogo" />
        </div>
    )
}

export default ComicsBanner;