import React, { useState } from 'react';
import '@picocss/pico';

const randomNum = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const Anecdote = ({ anecdotes, selected, votes }) => {
	return (
		<blockquote style={{ width: '40%' }}>
			{anecdotes[selected]}
			<footer>
				<cite>- has {!votes[selected] ? 'no' : votes[selected]} votes.</cite>
			</footer>
		</blockquote>
	);
};

const Button = ({ type, action, children }) => {
	if (type === 'primary') {
		return (
			<button style={{ width: 300, display: 'inline-block' }} onClick={action}>
				{children}
			</button>
		);
	}

	if (type === 'secondary') {
		return (
			<button
				style={{ width: 200, display: 'inline-block', marginLeft: '1rem' }}
				onClick={action}
				className='secondary outline'>
				{children}
			</button>
		);
	}
};

const BestAnecdoteCard = ({ voted, anecdotes, bestAnecdote }) => {
	return (
		<article style={{ width: 600 }}>
			{voted[bestAnecdote] === 0 ? (
				<h3>There are no votes for today yet...</h3>
			) : (
				<>
					<h3>The most voted anecdote today is:</h3>
					<p>{anecdotes[bestAnecdote]}</p>
					<footer>
						With <strong>{voted[bestAnecdote]}</strong> votes!
					</footer>
				</>
			)}
		</article>
	);
};

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
	];

	const [selected, setSelected] = useState(0);
	const [voted, setVoted] = useState([0, 0, 0, 0, 0, 0, 0]);

	const getRandomAnecdote = () => {
		setSelected(randomNum(0, anecdotes.length - 1));
	};

	const handleVote = () => {
		const array = [...voted];
		array[selected] += 1;
		setVoted(array);
	};

	const bestAnecdote = voted.indexOf(Math.max(...voted));

	return (
		<main style={{ marginLeft: '2rem' }}>
			<Anecdote anecdotes={anecdotes} selected={selected} votes={voted} />
			<Button type='primary' action={getRandomAnecdote}>
				Gimme random anecdote!
			</Button>
			<Button type='secondary' action={handleVote}>
				Vote
			</Button>
			<BestAnecdoteCard voted={voted} bestAnecdote={bestAnecdote} anecdotes={anecdotes} />
		</main>
	);
};

export default App;
