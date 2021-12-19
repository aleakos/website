import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import SingleBlog from './components/SingleBlog';
import Post from './components/Post';
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
        {/* <Route element={<SinglePost />} path="/post/:slug" exact /> */}
        <Route element={<SingleBlog />} path="/post/:slug" exact />
        <Route element={<Project />} path="/project" exact />
        <Route element={<PostList />} path="/post" exact />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
