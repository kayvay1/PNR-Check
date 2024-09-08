
let conta = document.getElementById("conta")
let pnrinput = document.getElementById('pnrinput')
let btn = document.getElementById('btn')
let status1 = document.getElementById('status')
let seat = document.getElementById('seat')
let before = document.getElementById('before')


async function myPnr2(){
    const url = `https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/${pnrinput.value}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ab7c50179dmsh2f52b7754163372p121ca8jsn0bbdf3356bf9',
		'X-RapidAPI-Host': 'pnr-status-indian-railway.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	// console.log(result.data.seatInfo);
	console.log(JSON.parse(result));
	before.style.display = 'none'
	status1.innerHTML = `Your Ticket is: ${JSON.parse(result).data.seatInfo.coach}`
	seat.innerHTML = ` & Your Berth is: ${JSON.parse(result).data.seatInfo.berth}`
	// noOfSeats.innerHTML = ` & Your Total Number Of Seats is: ${JSON.parse(result).data.seatInfo.noOfSeats}`
	// console.log(result.currentCoach);
	// console.log(result.currentBerthNo);
	// conta.innerHTML = result
	// conta.innerHTML = result
} catch (error) {
	console.error(error);
}
}

btn.addEventListener("click", myPnr2);












