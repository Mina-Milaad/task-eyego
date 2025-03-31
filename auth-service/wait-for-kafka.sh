#!/bin/sh

echo "⏳ Waiting for Kafka at $KAFKA_BROKER..."
while ! nc -z $(echo $KAFKA_BROKER | cut -d: -f1) $(echo $KAFKA_BROKER | cut -d: -f2); do
  sleep 2
done

echo "✅ Kafka is up. Starting auth-service..."
exec npm start
