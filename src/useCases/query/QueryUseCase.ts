import { idGenerator } from "@/helpers/idGenerator";
import { producer } from "@/kafkaConnection/connection";

export class QueryUseCase {
  async execute(query: Record<string, any>): Promise<void> {
    query.id = idGenerator();

    await producer.connect();
    await producer.send({
      topic: "server-events",
      messages: [{ value: JSON.stringify(query) }],
    });
  }
}
