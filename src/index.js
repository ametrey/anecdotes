import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({text}) => <h1>{text}</h1>

const Display = ({text}) => <p>{text}</p>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const VotesWinner = ({ anecdotes, points }) => {

  const mostVotedQuote = () => points.indexOf(Math.max(...points))

  if ( points[mostVotedQuote()] === 0) {
    return <p>No votes yet</p>
  }else
  
  return (
    <div>

    
    <p>{anecdotes[mostVotedQuote()]}</p>
    <p>Has {points[mostVotedQuote()]} points.</p>

    </div>
  )
}

const App = (props) => {

  const [selected, setSelected] = useState(0)


  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))


  const handleVote = () => {
    const copy = [...points]
    copy[selected]++
    setPoints(copy);
    console.log(copy)
  }


  const handleRandomSelect = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }





  return (
    <div>
      <Title text="Anecdote of the day" />
      <Display text={anecdotes[selected]}/>
      <Display text={'Has ' + points[selected] + ' votes'} />
      <Button onClick={handleRandomSelect} text="Get random" />
      <Button onClick={handleVote} text="Vote" />
      <Title text="Anecdote with most votes" />
      <VotesWinner anecdotes={anecdotes} points={points} />


    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)