import './index.css'

const matchGameUrl =
  'https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png'
const timerUrl =
  'https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png'

const NavBar = props => {
  const {timer, score} = props

  return (
    <nav className="nav-container">
      <ul className="nav-list-container">
        <li>
          <img
            className="matchGame-img"
            src={matchGameUrl}
            alt="website logo"
          />
        </li>
        <li>
          <div className="score-time-container">
            <p className="score-text">
              Score: <span className="no-text">{score}</span>
            </p>
            <div className="timer-container">
              <img className="timer-img" src={timerUrl} alt="timer" />
              <p className="sec-text">{`${timer} sec`}</p>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
