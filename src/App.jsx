import Navbarx from "./navbar"; 
import{Routes,Route} from'react-router-dom';
import Home from "./components/home";
import Student from "./components/student";
import Teacher from "./components/teacher";
import StudentCreate from "./components/studentcreate";
import ManagerUser from "./components/manageruser";
import About from "./components/about";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    <>
      <Navbarx>
        <Routes>
            <Route path="/"                   element= {<Home />} />
            <Route path="/student"            element= {<Student />} />
            <Route path="/student/create"     element= {<StudentCreate  />} />
            <Route path="/student/create/:id" element= {<StudentCreate  />} />
            <Route path="/teacher"            element= {<Teacher />}   />
            <Route path="/manageruser"        element= {<ManagerUser />} />
            <Route path="/about"              element= {<About />}   />
            <Route path="/login"              element= {<Login />} />
            <Route path="/register"           element= {<Register />} />
        </Routes>
      </Navbarx>




    </>
  );
}

export default App;
