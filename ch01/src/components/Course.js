import './../App.css';
import Lesson from './Lesson';
function Course(props) {
  return (
    <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <div className="card-text">
              <p>{props.time}</p>
              <p>{props.children}</p>
              <ul className="list-group">
                <Lesson></Lesson>
                <Lesson></Lesson>
                <Lesson></Lesson>
                <Lesson></Lesson>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
  );
}

export default Course;
