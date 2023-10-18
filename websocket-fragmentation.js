// Messages larger than 4096 bytes are split into separate messages
// causing the JSON parse to fail

const socket = new WebSocket('wss://s2.ripple.com')

socket.onopen = () => {
	console.log('connected')

	socket.send(JSON.stringify({
		command: 'subscribe',
		streams: ['ledger', 'transactions']
	}))
	
	socket.onmessage = event => {
		try{
			let payload = JSON.parse(event.data)
			console.log(`${event.data.length} byte payload: ok`)
		}catch{
			console.error(`${event.data.length}+ byte payload: corrupt`)
		}
	}

	socket.onclose = event => {
		console.error('connection lost code', event.code)
	}
}