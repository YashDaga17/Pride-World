import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Posts from "../pages/Posts";
import CreatePost from "../pages/CreatePost"
import Chatroom from "../pages/Chatroom"
import Exercise from '../pages/Exercise';
import Profile from '../pages/Profile';
import Chatbot from "../components/Chatbot";
import Footer from "../components/Footer";

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/createPost" element={<CreatePost />} />
                <Route path="/chatroom" element={<Chatroom />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/exercise" element={<Exercise />} />
            </Routes>
            <Chatbot />
            <Footer />
        </BrowserRouter>
    );
}

export default Main;
