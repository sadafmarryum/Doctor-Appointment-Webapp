import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/ContactUs'
import Myprofile from './pages/Myprofile'
import Myappointment from './pages/Myappointment'
import Register from "./pages/Register";
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
	return (
		<>
		<Header/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/doctors" element={<Doctor />} />
				<Route path="/doctors/:speciality" element={<Doctor />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/about" element={<About/>}/>
				<Route path="/contact" element={<Contact/>} />
				<Route path="/myProfile" element={<Myprofile/>} />
				<Route path="/myAppointment" element={<Myappointment/>} />
				<Route path="/myAppointment/:docId" element={<Myappointment />} />
			</Routes>
			<Footer/>
		</>
	);
}

export default App;
