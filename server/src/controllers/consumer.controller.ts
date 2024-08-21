import { Offset, Record } from "@fluvio/client";
import fluvio from "../service";
import { asyncHandler } from "../utils/asyncHandler";

const TOPIC_NAME = "message";
const PARTITION = 0;

export const consumer = asyncHandler(async (req, res) => {

  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Content-Type", "text/event-stream;");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");
    res.flushHeaders();

    await fluvio.connect();

    const consumer = await fluvio.partitionConsumer(TOPIC_NAME, PARTITION);

    await consumer.stream(Offset.FromEnd(), async (record: Record) => {
      const eventData = record.valueString();
      const responseMsg = `data: ${JSON.stringify(eventData)}`;

      console.log(responseMsg);
      res.write(responseMsg + "\n\n");
    });
    res.on("close", () => {
      console.log('Client disconnected');
      res.end();
    });
  }
  catch (error) {
    res.status(500).json({
      error: error,
    });
  }
})
