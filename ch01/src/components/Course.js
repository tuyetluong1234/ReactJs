import { Component } from 'react';
import './../App.css';
import Lesson from './Lesson';
class Course extends Component {
  ShowButtonFree(){
    const isFree = this.props.free;
    if(isFree === true){
      return <div className="card-footer">
            <button className="btn btn-warning">View</button>
          </div>
      // console.log(isFree);
    }
    
  }
  render(){
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <div className="card-text">
              <p>{this.props.time}</p>
              <p>{this.props.children}</p>
              <ul className="list-group">
                <Lesson></Lesson>
                <Lesson></Lesson>
                <Lesson></Lesson>
                <Lesson></Lesson>
              </ul>
              
            </div>
          </div>
          {this.ShowButtonFree()}
        </div>
      </div>
    );
  }
}


export default Course;
