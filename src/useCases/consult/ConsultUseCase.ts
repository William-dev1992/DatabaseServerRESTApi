import { consumer } from "@/kafkaConnection/connection";

export class ConsultUseCase {
  async execute(command: string) {
    const topic = "server-events";

    let result = [];

    await consumer.connect();
    await consumer.subscribe({ topic, fromBeginning: true });
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          partition,
          offset: message.offset,
          value: message.value.toString(),
        });
      },
    });

    return result;
  }
}
