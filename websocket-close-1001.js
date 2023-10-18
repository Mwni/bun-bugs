// Some WebSocket server implementations trigger an unexpected code 1001 close
// after a few seconds

const socket = new WebSocket('wss://xrplcluster.com')

socket.onopen = () => console.log('connected, wait for it ...')
socket.onclose = event => console.log('closed', event.code)