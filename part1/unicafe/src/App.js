import React, { useState } from 'react';

const Button = ({ handler, children }) => {
	return <button onClick={handler}>{children}</button>;
};

const StatisticLine = ({ text, value }) => {
	return (
		<tr>
			<td>{text}:</td>
			<td>
				<strong>{value}</strong>
			</td>
		</tr>
	);
};

const Statistics = ({ feedback }) => {
	const { good, neutral, bad } = feedback;

	const totalFeedback = good + neutral + bad;

	const average = (good + neutral * 0 + bad * -1) / totalFeedback;

	const positivePercentage = (good / totalFeedback) * 100;

	return (
		<main>
			<h2>Statistics</h2>
			{good === 0 && neutral === 0 && bad === 0 ? (
				<p>No feedback 😥 Show us some luv!</p>
			) : (
				<table>
					<tbody>
						<StatisticLine text={'Good'} value={good} />
						<StatisticLine text={'Neutral'} value={neutral} />
						<StatisticLine text={'Bad'} value={bad} />
						<StatisticLine text={'Average'} value={average} />
						<StatisticLine text={'% of positive'} value={positivePercentage} />
						<StatisticLine text={'Total no. of votes'} value={totalFeedback} />
					</tbody>
				</table>
			)}
		</main>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const feedback = { good, neutral, bad };

	return (
		<>
			<h1>Feedback time!</h1>
			<Button handler={() => setGood((prev) => prev + 1)}>Good 😄</Button>
			<Button handler={() => setNeutral((prev) => prev + 1)}>Neutral 😐</Button>
			<Button handler={() => setBad((prev) => prev + 1)}>Bad 🤬</Button>
			<Statistics feedback={feedback} />
		</>
	);
};

export default App;
