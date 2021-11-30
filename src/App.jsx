import {lazy, Suspense} from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import styled from '@emotion/styled'
import Header from "./components/Header/Header";

const Home = lazy(() => import('../src/views/Home/Home'));
const Summary = lazy(() => import('./views/Summary/Summary'));
const Ingredients = lazy(() => import('./views/Ingredients/Ingredients'));

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ViewContent = styled.div`
  display: flex;
  flex: 1;
  padding: 15px;
  overflow: auto;
`

const App = () => (
        <Layout>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Header/>
                    <ViewContent>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="ingredients" element={<Ingredients/>}/>
                            <Route path="summary" element={<Summary/>}/>
                        </Routes>
                    </ViewContent>
                </Suspense>
            </BrowserRouter>
        </Layout>
    )

export default App;
