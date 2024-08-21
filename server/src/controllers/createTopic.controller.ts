import fluvio from "../service";
import { asyncHandler } from "../utils/asyncHandler";

export const createTopic = asyncHandler(async (req, res) => {
    try {

        const TOPIC_NAME = "message";

        try {
            await fluvio.connect();

            // Create admin client;
            const admin = await fluvio.admin();

            // Create topic
            await admin.createTopic(TOPIC_NAME);

        } catch (ex) {
            res.send("Topic already exists" + ex);
        }
    } catch (error) {
        res.send(error)
    }
})