import Box from "./Box"
import process from "../process"
import { Suspense } from "react"

export default function Output({
	characters,
	variations,
	numbers,
	uppercase,
	done,
}: {
	characters: number
	variations: number
	numbers: string
	uppercase: string
	done: boolean
}) {
	let result: Array<Array<String>>

	result = []
	if (done) {
		result = process(characters, variations, numbers, uppercase)
		console.log(result)
	} else {
		console.log("User has not filled out form")
	}

	return (
		<div className="bg-amber-700 w-1/2 ml-[25%] rounded-md p-3">
			<h1 className="m-3 font-bold text-4xl">Generated Password</h1>
			<div className="font-bold m-3 bg-slate-700 text-white border-2 border-slate-400 rounded-md p-4 flex flex-row flex-wrap justify-evenly">
				<h3 className="m-1">Characters: {characters}</h3>
				<h3 className="m-1">Variations: {variations}</h3>
				<h3 className="m-1">Numbers: {numbers}</h3>
				<h3 className="m-1">Uppercase: {uppercase}</h3>
			</div>

			<Suspense fallback={<div>Loading...</div>}>
				{/* @ts-ignore */}
				<Box result={result} />
			</Suspense>
		</div>
	)
}
