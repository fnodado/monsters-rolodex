import { Component } from 'react';

class ClickMeButton extends Component {
  render() {
    const { onClickButton } = this.props;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <button onClick={onClickButton}>Click Me!</button>
      </div>
    );
  }
}

export default ClickMeButton;
