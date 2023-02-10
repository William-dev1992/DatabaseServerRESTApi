import { producer } from "../../kafkaConnection/connection";

export class QueryUseCase {
  async execute(query: Record<string, any>) {
    await producer.connect();
    await producer.send({
      topic: "server-events",
      messages: [{ value: JSON.stringify(query) }],
    });
  }
}
