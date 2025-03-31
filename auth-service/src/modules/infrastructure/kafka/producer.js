const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'auth-service',
    brokers: [process.env.KAFKA_BROKER || 'kafka:9092'],
});

const producer = kafka.producer();

const connect = async () => {
    await producer.connect();
    console.log('Kafka producer connected');
};

connect();

module.exports = producer;
