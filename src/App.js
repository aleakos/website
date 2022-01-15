import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import SingleBlog from './components/SingleBlog';
import Project from './components/Project';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import PostList from './components/PostList';
import Resume from './components/Resume';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Landing />} exact path="/" key={'app-home'} />
        {/* <Route element={<About />} exact path="/about" key={'app-about'} /> */}
        {/* <Route
          element={<SingleBlog />}
          exact
          path="/post/:slug"
          key={'app-single-blog'}
        /> */}
        <Route
          element={<Project />}
          exact
          path="/project"
          key={'app-project'}
        />
        <Route
          element={<Resume />}
          exact
          path="/resume"
          key={'resume-project'}
        />
        <Route element={<PostList />} exact path="/post" key={'app-post'} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
