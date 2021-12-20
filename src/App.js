import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import SingleBlog from './components/SingleBlog';
import Project from './components/Project';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import PostList from './components/PostList';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Landing />} path="/" exact key={'app-home'} />
        <Route element={<About />} path="/about" exact key={'app-about'} />
        <Route
          element={<SingleBlog />}
          path="/post/:slug"
          exact
          key={'app-single-blog'}
        />
        <Route
          element={<Project />}
          path="/project"
          exact
          key={'app-project'}
        />
        <Route element={<PostList />} path="/post" exact key={'app-post'} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
