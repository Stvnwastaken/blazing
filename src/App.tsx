import "./App.css"
import Form from "./components/Form"

function App() {
	return (
		<div className="m-4">
			<h1 className="text-5xl font-bold">
				🔥 Blazingly <span className="text-amber-600 font-extrabold">Fast</span>{" "}
				Password Generator
			</h1>
			<h1 className="font-semibold text-lg m-1">
				Made by{" "}
				<a
					className="text-orange-500 underline"
					target="_blank"
					href="https://github.com/stvnwastaken"
				>
					Stvn
				</a>
			</h1>
			<Form />
		</div>
	)
}

export default App
