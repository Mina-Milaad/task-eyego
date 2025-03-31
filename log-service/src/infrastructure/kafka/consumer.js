const { Kafka } = require('kafkajs');
const repository = require('../../modules/logs/repository');

const kafka = new Kafka({
    clientId: 'log-service',
    brokers: [process.env.KAFKA_BROKER || 'kafka:9092']
});

const consumer = kafka.consumer({ groupId: 'log-group' });

exports.run = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'auth-events', fromBeginning: true });
    setTimeout(async () => {
        await consumer.run({
            eachMessage: async ({ message }) => {
                const event = JSON.parse(message.value.toString());
                await repository.save(event);
                console.log('Log saved:', event);
            }
        });
    }, 1000)
};