import React from 'react';

const Header = ({ course }) => {
	return <h1>{course.name}</h1>;
};

const Part = ({ item }) => {
	return (
		<p key={item.id}>
			{item.name}: {item.exercises}
		</p>
	);
};

const Content = ({ course }) => {
	return (
		<>
			{course.parts.map((item) => (
				<Part item={item} />
			))}
		</>
	);
};

const Total = ({ course }) => {
	const total = course.parts.reduce((total, current) => total + current.exercises, 0);

	return <p>Number of exercises: {total}</p>;
};

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				id: 1,
				name: 'Fundamentals of React',
				exercises: 10,
			},
			{
				id: 2,
				name: 'Using props to pass data',
				exercises: 7,
			},
			{
				id: 3,
				name: 'State of a component',
				exercises: 14,
			},
		],
	};

	return (
		<>
			<Header course={course} />
			<Content course={course} />
			<Total course={course} />
		</>
	);
};

export default App;
