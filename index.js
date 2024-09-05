const Button = (props) => {
  const { buttonText, buttonClass } = props;
  return (
    <>
      <button className={`social-button ${buttonClass}`}>{buttonText}</button>
    </>
  );
};

const element = (
  <div className="social-buttons-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons-container">
      <Button buttonText="Like" buttonClass="like" />
      <Button buttonText="Comment" buttonClass="comment" />
      <Button buttonText="Share" buttonClass="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
