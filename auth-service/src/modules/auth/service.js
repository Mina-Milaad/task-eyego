const producer = require("../infrastructure/kafka/producer");


exports.sendAuthEvent = async (event) => {
    await producer.send({ topic: 'auth-events', messages: [{ value: JSON.stringify({ ...event, timestamp: new Date() }) }] });
};