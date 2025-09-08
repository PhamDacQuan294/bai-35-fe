import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import LayoutDefault from './layout/LayoutDefault';
import Blog from './pages/Blog';
import BlogNews from './pages/Blog/BlogNews';

function App() {
  return (
    <>
      <Routes>  
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="blog" element={<Blog />}>
            <Route path="news" element={<BlogNews />}/>
          </Route>  

          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

//Ngoài những cái path được định nghĩa ra thì * là những cái path còn lại chưa được định nghĩa