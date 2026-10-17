import { useState } from 'react'

const StatiscticLine = ({ text, value }) => (
	<tr>
		<td>
			{text}
		</td>

		<td>
			{value}
		</td>
	</tr>
)

const Statistics = ({ good, neutral, bad }) => {
	const total = good + neutral + bad
	const average = Math.round((good - bad) / (total) * 100) / 100
	const positivePercent = Math.round(good / total * 100 * 100) / 100

	if (!total) {
		return (
			<p>{'No feedback given'}</p>
		)
	}
	
	return (
		<table>
			<tbody>
				<StatiscticLine 
					text={'good'}
					value={good}
				/>

				<StatiscticLine 
					text={'neutral'}
					value={neutral}
				/>

				<StatiscticLine 
					text={'bad'}
					value={bad}
				/>

				<StatiscticLine 
					text={'total'}
					value={total}
				/>

				<StatiscticLine 
					text={'average'}
					value={average}
				/>

				<StatiscticLine 
					text={'positive'}
					value={`${positivePercent} %`}
				/>
			</tbody>
		</table>
	)
}

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	return (
		<div>
			<h1>
				{'give feedback'}
			</h1>

			<button onClick={() => setGood(good + 1)}>
        		{'good'}
      		</button>
			
      		<button onClick={() => setNeutral(neutral + 1)}>
        		{'neutral'}
      		</button>

			<button onClick={() => setBad(bad + 1)}>
        		{'bad'}
      		</button>

			<h2>
				{'statistics'}
			</h2>

			<Statistics 
				good={good}
				neutral={neutral}
				bad={bad}
			/>
		</div>
	)
}

export default App
