
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
import ExploreCourses from './components/ExploreCourses/ExploreCourses';

function App() {
  return (
    <div>
     <Router>
       <Header/>
       <Switch>
         <Route exact path="/" >
           <Main/>
          

         </Route>
         <Route path="/home">
           <Main/>
         </Route>
         <Route path="/about">
           <About>Our Courses</About>
           <ExploreCourses></ExploreCourses>
         </Route>
         <Route path="/courses">
          <Courses>All Courses</Courses>
          <ExploreCourses></ExploreCourses>
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