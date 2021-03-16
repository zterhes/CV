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
import Resume from './pages/resume'
import Technologies from './pages/technologies'
import Contacts from './pages/contact'



const Page = styled.div`
display:flex;
width:100vw;
height:100vh;
`

const MenuDiv = styled.div`
position: fixed;
align-self:center;
z-index:10;
width:10vw;
height: 50vh;
margin-left:1vw;
`
const ContentDiv = styled.div`
width:100vw;
height:100vh;
`

function App() {
  return (
    <Router>
      <Page>
        <MenuDiv>
          <Menu/>
        </MenuDiv>
        <ContentDiv>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/resume'>
              <Resume/>
            </Route>
            <Route exact path='/technologies'>
              <Technologies/>
            </Route>
            <Route exact path='/contacts'>
              <Contacts/>
            </Route>
          </Switch>
        </ContentDiv>
      </Page>
    </Router>
  );
}

export default App;
