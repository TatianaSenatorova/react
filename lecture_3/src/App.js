import "./App.css";
import ParentCounter from "./components/parent";
import InputForm from "./components/form";
import Nav from "./components/menu";
import HoverRating from "./components/rating";
import NestedList from "./components/list";
import Student from "./components/proptype";

function App() {
  return (
    <div className="App">
      <ParentCounter />
      <InputForm />
      <Nav />
      <HoverRating /> 
      <NestedList />  
      <Student name='Dima' age={30} isStudent={true} /> 
    </div>
  );
}

export default App;
