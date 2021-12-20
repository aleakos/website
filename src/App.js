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
        <Route element={<Landing />} path="/" exact />
        <Route element={<About />} path="/about" exact />
        <Route element={<SingleBlog />} path="/post/:slug" exact />
        <Route element={<Project />} path="/project" exact />
        <Route element={<PostList />} path="/post" exact />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
