import  Fluvio, {Offset } from '@fluvio/client';

const processTrafficData = async () => {
  const fluvio = new Fluvio();
  await fluvio.connect();
  const consumer = await fluvio.partitionConsumer('traffic-updates', 0);

  const stream = consumer.stream(Offset.beginning());

  for await (const record of stream) {
    const trafficData = JSON.parse(record.valueString());
    console.log('Received traffic data:', trafficData);

    // Further processing or storing can be done here
  }
};

processTrafficData();
