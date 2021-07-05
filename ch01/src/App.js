
import './App.css';
import Course from './components/Course'
function App() {
  return (
    <div className="row">
      <Course name="ReactJS" time="30h" free="true">ReactJS is very simple !!</Course>
      <Course name="Angular" time="55h" free="false"></Course>
      <Course name="NodeJs" time="35h" free="true"></Course>
    </div>
  );
}

export default App;
