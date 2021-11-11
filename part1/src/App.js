import React from 'react';

const Header = ({ course }) => {
	return <h1>{course}</h1>;
};

const Content = ({ content }) => {
	return (
		<>
			{content.map((item) => {
				return (
					<p key={item.id}>
						{item.partName}: {item.exercises}
					</p>
				);
			})}
		</>
	);
};

const Total = ({ total }) => {
	return <p>Number of exercises: {total}</p>;
};

const App = () => {
	// const-definitions
	const course = 'Half Stack application development';
	const content = [
		{
			id: 1,
			partName: 'Fundamentals of React',
			exercises: 10,
		},
		{
			id: 2,
			partName: 'Using props to pass data',
			exercises: 7,
		},
		{
			id: 3,
			partName: 'State of a component',
			exercises: 14,
		},
	];
	const total = content.reduce((acc, current) => acc + current.exercises, 0);

	return (
		<div>
			<Header course={course} />
			<Content content={content} />
			<Total total={total} />
		</div>
	);
};
export default App;
