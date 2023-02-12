import { Helmet } from "react-helmet";
import ComicsBanner from "../comicsBanner/comicsBanner";
import ComicsList from "../comicsList/ComicsList";

const ComicsPage = () => {

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Page with list of our comics"
                    />
                <title>Comics Page</title>
            </Helmet>
            <ComicsBanner/>
            <ComicsList/>
        </>
    )
}

export default ComicsPage;