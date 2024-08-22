import WebSocket from 'ws'
import Fluvio from '@fluvio/client';


export async function producer (){
  // Fluvio topic name
  const topicName = "message";

  // Connect to Fluvio
  const fluvio = await Fluvio.connect();

  // Create a producer for the specified topic
  const producer = await fluvio.topicProducer(topicName);

  const socket = new WebSocket(`wss://ws.finnhub.io?token=${process.env.FINNHUB_API_KEY}`);

  socket.addEventListener('open', function (event) {
    console.log('WebSocket connection opened.');
    socket.send(JSON.stringify({'type': 'subscribe', 'symbol': 'AAPL'}));
    socket.send(JSON.stringify({'type': 'subscribe', "symbol":"BINANCE:BTCUSDT"}));
    socket.send(JSON.stringify({'type': 'subscribe', 'symbol': 'AMZN'}));
    socket.send(JSON.stringify({'type': 'subscribe', 'symbol': 'GOOG'}));
    socket.send(JSON.stringify({'type': 'subscribe', 'symbol': 'MSFT'}));
    socket.send(JSON.stringify({'type': 'subscribe', 'symbol': 'META'}));
  });

  // Listen for messages from WebSocket
  socket.addEventListener('message', async function (event) {
    let message = event.data;
    console.log('Message from server:', message);

    if (Buffer.isBuffer(message)) {
      message = message.toString('utf-8');
    } else if (typeof message !== 'string') {
      message = JSON.stringify(message);
    }

    
    try {
      await producer.send("key", message);
    } catch (error) {
      console.error('Error producing message to Fluvio:', error);
    }
  });

  socket.addEventListener('close', function (event) {
    console.log('WebSocket connection closed.');
  });

  // Handle WebSocket errors
  socket.addEventListener('error', function (event) {
    console.error('WebSocket error:', event);
  });
}