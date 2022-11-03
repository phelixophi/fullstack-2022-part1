import { useState } from 'react'

const Statistics = ({ good, bad, neutral }) => {
  const All = good + bad + neutral
  const Average = (good - bad) / All
  const Positive = (good / All) * 100

  return (
    All === 0 ? <p>No feedback given</p> :
      <div>
        <table>
          <tbody>
            <h1>Statistics</h1>
            <StatisticLine text={"good"} value={good} />
            <StatisticLine text={"neutral"} value={neutral} />
            <StatisticLine text={"bad"} value={bad} />
            <StatisticLine text={"all"} value={All} />
            <StatisticLine text={"average"} value={Average} />
            <StatisticLine text={"positive"} value={Positive + "%"} />
          </tbody>
        </table>
      </div>

  )
}

const Button = ({ text, handleClick }) => {
  return (<button onClick={handleClick}>{text}</button>)
}

const StatisticLine = ({ text, value }) => {
  return (<p>{text} {value}</p>)
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => { setGood(good + 1) }
  const handleBadClick = () => { setBad(bad + 1) }
  const handleNeutralClick = () => { setNeutral(neutral + 1) }

  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <Button text={"good"} handleClick={handleGoodClick} />
      <Button text={"neutral"} handleClick={handleNeutralClick} />
      <Button text={"bad"} handleClick={handleBadClick} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

export default App;
