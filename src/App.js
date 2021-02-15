import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./styles.css";
import Menu from "./components/menu";
import styled from "styled-components";

import Home from "./pages/home";

const Page = styled.div`
display:flex;
width:100vw;
height:100vh;
`

const MenuDiv = styled.div`
width:10vw;
height: 100vh;
`
const ContentDiv = styled.div`
width:90vw;
height:100vh;
`

function App() {
  return (
    <Router>
      <Page>
        <MenuDiv>
          <Menu></Menu>
        </MenuDiv>
        <ContentDiv>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
          </Switch>
        </ContentDiv>
      </Page>
    </Router>
  );
}

export default App;
