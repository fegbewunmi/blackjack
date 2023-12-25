import React, { useState } from "react";

const GameActions = ({ gameState, hitEvent }) => {
  const [amount, setAmount] = useState(10);

  const setup = () => {
    // if (gameState === 0) {
    //   return (
    //     <div className={styles.controlsContainer}>
    //       <div className={styles.betContainer}>
    //         <h4>Amount:</h4>
    //         <input autoFocus type='number' value={amount} onChange={amountChange} className={inputStyle} />
    //       </div>
    //       <button onClick={() => onBetClick()} className={styles.button}>Bet</button>
    //     </div>
    //   );
    // }
    // else {
    return (
      <div>
        <button onClick={() => hitEvent()}>Hit</button>
        {/* <button onClick={() => standEvent()} disabled={buttonState.standDisabled} className={styles.button}>Stand</button>
          <button onClick={() => resetEvent()} disabled={buttonState.resetDisabled} className={styles.button}>Reset</button> */}
      </div>
    );
  };

  return <>{setup()}</>;
};
export default GameActions;
