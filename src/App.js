import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from './components/Project';
import NavBar from './components/NavBar';
import Landing from './components/Landing';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Landing />} path="/" exact />
        <Route element={<About />} path="/resume" exact />
        <Route element={<SinglePost />} path="/post/:slug" exact />
        <Route element={<Post />} path="/post" exact />
        <Route element={<Project />} path="/project" exact />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
