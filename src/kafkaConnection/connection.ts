import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "server-events",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: "server-events" });

export { producer, consumer };
