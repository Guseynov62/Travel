import './App.css';
import React from 'react';
import Layout from './component/layout';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Main from'./component/main/index';
import Destinations from './component/destination/destination';
import Contact from './component/contactUs/contactUs';
import About from './component/aboutUs/about';
import Faq from './component/FAQ/faq';
import Blog from './component/blog/blog'
import Login from './component/login/login';
import Forgot from './component/login/forgot';

function App() {
return(
      <BrowserRouter>
        <Routes>
                <Route path="/" element={<Layout><Main/></Layout>} />
                <Route path="/destination" element={<Layout><Destinations /></Layout>} />
                <Route path="/contactUs" element={<Layout><Contact/></Layout>} />
                <Route path="about" element={<Layout><About/></Layout>}/>
                <Route path="/faq" element={<Layout><Faq/></Layout>}/>
                <Route path="/blog" element={<Layout><Blog/></Layout>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/forgot" element={<Forgot/>}/>
                
            </Routes>
      </BrowserRouter>
    
)
}

export default App;
