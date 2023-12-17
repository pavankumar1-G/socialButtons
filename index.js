const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`buttons ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="content-container">
      <h1 className="main-heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button className="like-btn" buttonText="Like" />
        <Button className="comment-btn" buttonText="Comment" />
        <Button className="share-btn" buttonText="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
