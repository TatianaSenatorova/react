import './App.css';
import Counter from './components/counter';
import MessageList from './components/list';
import RefExample from './components/ref';
import Timer from './components/timer';
import Show from './components/visibale';


function App() {
  return (
    <div className="App">
 <Counter /> 
 <Show data="новый текст из компонента"/>  
 <Timer />  
 <RefExample /> 
 <MessageList />  
    </div>
    
  );
}

export default App;
