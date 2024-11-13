import { Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/ContactUs'
import Myprofile from './pages/Myprofile'
import Myappointment from './pages/Myappointment'
import Userappointment from "./pages/Userappointment";


function App() {
	return (
		<>
		<Header/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/doctors" element={<Doctor />} />
				<Route path="/doctors/:speciality" element={<Doctor />} />
				<Route path="/about" element={<About/>}/>
				<Route path="/contact" element={<Contact/>} />
				<Route path="/myProfile" element={<Myprofile/>} />
				<Route path="/userappointment" element={<Userappointment />} />
				<Route path="/myAppointment" element={<Doctor />} />
				<Route path="/myAppointment/:docId" element={<Myappointment />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		
		</>
	);
}

export default App;
