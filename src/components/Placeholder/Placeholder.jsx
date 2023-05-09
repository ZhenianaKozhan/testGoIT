import { Link } from "react-router-dom";

const Placeholder = () => {
  return (
    <div className="placeholder">
      <h1>Hello</h1>
      <p>
        It is a test project, created by React. You can evaluate the work of the
        project by clicking on the menu Tweets or{" "}
        <Link to="/tweets">"here"</Link>.
      </p>
    </div>
  );
};

export default Placeholder;
