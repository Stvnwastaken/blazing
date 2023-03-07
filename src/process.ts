export default function process(
	amount: number,
	variations: number,
	number: string,
	uppercase: string
) {

	function generateCharNums(): Array<Array<String>> {
		const res = []
		const nums = "0123456789"
		for (let i = 0; i < variations; i++) {
			let password = []
			for (let j = 0; j < amount; j++) {
				let random = Math.round(Math.random() * nums.length - 1)
				password.push(nums.substring(random, random + 1))
			}
			console.log(password)
			res.push([`${i + 1}`, password.join("")])
		}
		return res
	}

	function generateCharsOnly(): Array<Array<String>> {
		const res = []
		const chars = "abcdefghijklmnopqrstuvwxyz"
		for (let i = 0; i < variations; i++) {
			let password = []
			for (let j = 0; j < amount; j++) {
				let yesnt = Math.random()
				if (uppercase == "True") {
					if (Math.round(yesnt) > 0) {
						let random = Math.round(Math.random() * chars.length - 1)
						password.push(chars.substring(random, random + 1).toUpperCase())
					} else {
						let random = Math.round(Math.random() * chars.length - 1)
						password.push(chars.substring(random, random + 1))
					}
				} else {
					let random = Math.round(Math.random() * chars.length - 1)
					password.push(chars.substring(random, random + 1))
				}
			}
			console.log(password)
			res.push([`${i + 1}`, password.join("")])
		}
		return res
	}

	let res

	if (number == "True") {
		console.log('true')
		res = generateCharNums()
	} else {
		res = generateCharsOnly()
	}

	console.log(res)

	return res
	//  [
	// 	variation: first value, password: second value
	// 	["3", "foo"],
	// 	["4", "foo"],
	// 	["6", "foo"],
	// 	["7", "foo"],
	// ]
}
