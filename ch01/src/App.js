
import { Component } from 'react';
import './App.css';
import Course from './components/Course'
class App extends Component {
  render(){
    const items =[
      {
        name:"ReactJS",
        time:"30h",
        free:true,
        desc:"ReactJS is very simple !!"
      },
      {
        name:"Angular",
        time:"55h",
        free:false
      },
      {
        name:"NodeJs",
        time:"35h",
        free:true
      }
    ]
    console.log(items);
    const elmCourses = items.map((item, index) =>
      // console.log(item)
      <Course key={index} name={item.name} time={item.time} free={item.free}>{item.desc}</Course>
    );
    // const el = numbers.map((item) =>
    //   <li>{item}</li>
    // );
  return (
    
    <div className="row">
      {/* <Course name="ReactJS" time="30h" free={true}></Course>
      <Course name="Angular" time="55h" free={false}></Course>
      <Course name="NodeJs" time="35h" free={true}></Course> */}
     {elmCourses}
    </div>
  )
  }
}

export default App;
