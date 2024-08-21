import express from 'express'
import { consumer } from '../controllers/consumer.controller';

const router = express.Router();

router.route('/stream').get(consumer)

export default router;