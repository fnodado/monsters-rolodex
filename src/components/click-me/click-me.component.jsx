const ClickMeButton = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      }}
    >
      <button onClick={props.onclickButton}>Click Me!</button>
    </div>
  );
};

export default ClickMeButton;
