function PlayersTurn (props) {
  const {winner, turnPlayer} = props; 
  return <div className="info-container">
  {winner ?
    <div className="player-info">
      <p>{`${winner} wins!`}</p>
    </div>
    :
    <div className="player-info players-turn-container">
      <p>{`${turnPlayer}'s turn`}</p>
      <div
        className={`player-icon ${turnPlayer === 'player1' ? 'player1-icon' : 'player2-icon'}`}
      />
    </div>}
</div>
}

export default PlayersTurn;