import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Posts from "../pages/Posts.js";
import CreatePost from "../pages/CreatePost.js"
import Chatroom from "../pages/Chatroom.js"
import Exercise from '../pages/Exercise';
import Chatbot from "../components/Chatbot";

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/createPost" element={<CreatePost />} />
                <Route path="/chatroom" element={<Chatroom />} />
                <Route path="/exercise" element={<Exercise />} />
            </Routes>
            <Chatbot />
        </BrowserRouter>
    );
}

export default Main;
