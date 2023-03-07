import { useEffect, useState } from "react"
import Output from "./Output"

export default function Form() {
	//type check input on submit
	const [done, setDone] = useState(false)
	const [charAmount, setCharAmount] = useState(0)
	const [finalCharAmount, setFinalCharAmount] = useState(0)
	const [finalNums, setFinalNums] = useState("False")
	const [finalVarAmount, setFinalVarAmount] = useState(0)
	const [finalUpperAmount, setFinalUpperAmount] = useState("False")
	const [wNums, setWNums] = useState("False")
	const [wUpper, setWUpper] = useState("False")
	const [varAmount, setVarAmount] = useState(0)

	useEffect(() => {
		console.log(charAmount)
	}, [charAmount])

	useEffect(() => {
		console.log(wNums)
	}, [wNums])

	useEffect(() => {
		console.log(wUpper)
	}, [wUpper])

	useEffect(() => {
		console.log(varAmount)
	}, [varAmount])

	let result = [
		//variation: 7, password: foo
		["7", "foo"],
		["7", "foo"],
		["7", "foo"],
		["7", "foo"],
	]

	return (
		<div>
			<div className="shadow-sm shadow-orange-500 border-2 border-amber-600 flex flex-col m-7 p-2 bg-slate-700 w-1/2 ml-[25%] rounded-md">
				<input
					value={charAmount}
					onChange={(e: any) => {
						setCharAmount(e.target.value)
					}}
					className="rounded-md m-3 p-3 border-2 border-amber-600"
					type="number"
					placeholder="character amount (up to 20)"
				/>
				<h3>
					Password with numbers?
					<input
						value={wNums}
						onChange={(e) => {
							e.target.checked ? setWNums("True") : setWNums("False")
						}}
						className="m-3"
						type="checkbox"
						name="withNumbers?"
						id="withNum"
					/>
				</h3>
				<h3 className="">
					Password with uppercase?
					<input
						value={wUpper}
						onChange={(e) => {
							e.target.checked ? setWUpper("True") : setWUpper("False")
						}}
						className="m-3"
						type="checkbox"
						name="withUppercase?"
						id="withCase"
					/>
				</h3>
				<input
					value={varAmount}
					onChange={(e: any) => {
						setVarAmount(e.target.value)
					}}
					className="rounded-md m-3 p-3 border-2 border-amber-600"
					type="number"
					placeholder="variation amount (1-10)"
				/>
				<button
					onClick={() => {
						//@ts-ignore
						if (varAmount == "" || charAmount == "") {
							alert("Please fill in form")
						} else if (
							varAmount > 10 ||
							charAmount > 20 ||
							varAmount < 1 ||
							charAmount < 1
						) {
							alert("Input beyond paremeters")
						} else {
							setFinalCharAmount(charAmount)
							setFinalNums(wNums)
							setFinalUpperAmount(wUpper)
							setFinalVarAmount(varAmount)
							setDone(true)
						}
					}}
					className="w-1/2 ml-[25%] hover:shadow-md hover:shadow-amber-500 hover:from-red-700 hover:via-amber-600 hover:to-red-700 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-100 text-xl font-bold m-3 p-3 rounded-md bg-gradient-to-r from-red-800 via-amber-700 to-red-800 border-2 border-amber-500"
				>
					Generate
				</button>
			</div>
			{/* {
				done ? <Output /> : 
			} */}
			<Output
				numbers={finalNums}
				uppercase={finalUpperAmount}
				variations={finalVarAmount}
				characters={finalCharAmount}
				done={done}
			/>
		</div>
	)
}
