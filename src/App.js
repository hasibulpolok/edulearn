
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import LoginRegister from './components/LoginRegister/LoginRegister';

function App() {
  return (
    <div>
     <Router>
       <Header/>
       <Switch>
         <Route path="/" exact>
           <Main/>
         </Route>
         <Route path="/home">
           <Main/>
         </Route>
         <Route path="/about">
           <About/>
         </Route>
         <Route path="/courses">
           <Courses/>
         </Route>
         <Route path="/contact">
           <Contact/>
         </Route>
         <Route path="/enroll">
           <LoginRegister/>
         </Route>
         <Route path="/*">
           <NotFound/>
         </Route>
       </Switch>
       <Footer/>
     </Router>
    </div>
  );
}

export default App;