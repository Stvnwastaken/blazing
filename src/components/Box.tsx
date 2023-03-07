export default function Box(result: any) {
	const data = result.result
	return (
		<div className="justify-center flex flex-wrap bg-slate-500 border-4 p-4 m-2 rounded-lg border-slate-100">
			{data.map((variation: any) => (
				<span className="bg-slate-700 p-4 rounded-md m-3 flex flex-wrap">
					<span className="bg-amber-700 p-3 rounded-md">
						Variation {variation[0]}
					</span>{" "}
					<span className="font-bold text-lg" key={variation[0]}>
						{variation[1]}
					</span>
					<button
						onClick={() => navigator.clipboard.writeText(variation[1])}
						className="bg-slate-500 p-2 m-1 rounded-md active:bg-slate-600 hover:bg-slate-400"
					>
						Copy
					</button>
				</span>
			))}
		</div>
	)
}
