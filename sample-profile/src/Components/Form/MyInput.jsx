import { useEffect } from "react";
import { Form } from "react-bootstrap";
import "./MyInput.css";
const MyInput = (props) => {
  useEffect(() => console.log(props.label), []);
  return (
    <div className="myinput">
      <div className="form-group">
        <label className="form-lable pb-2" htmlFor={props.id}>
          {props.label}
        </label>
        <div className="input-group">
          <Form.Control
            onChange={props.onChange}
            id={props.id}
            className="form-control shadow-none myinput"
            type={props.type}
            name={props.name}
            isInvalid={props.isInvalid}
            value={props.value}
          />
          <Form.Control.Feedback type="invalid" className={"ml-1"}>
            {props.invalidMessage}
          </Form.Control.Feedback>
        </div>
      </div>
    </div>
  );
};

export default MyInput;
