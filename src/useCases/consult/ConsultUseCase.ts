import { consumer } from "../../kafkaConnection/connection";

export class ConsultUseCase {
  async execute(command: string) {
    const topic = "server-events";

    let result = [];

    await consumer.connect();
    await consumer.subscribe({ topic, fromBeginning: true });
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        result.push(message.value);
      },
    });

    return result;
  }
}
