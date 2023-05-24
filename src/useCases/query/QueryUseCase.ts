import { idGenerator } from "@/helpers/idGenerator";
import { producer } from "@/kafkaConnection/connection";
import insertToDatabase from "@/db/insertToDatabase";

export class QueryUseCase {
  async execute(query: Record<string, any>, token: string): Promise<void> {
    const queryId = idGenerator();

    const messageQuery = {
      queryId,
      queryValue: query,
    };

    await producer.connect();
    await producer.send({
      topic: "server-queries",
      messages: [
        {
          value: JSON.stringify(messageQuery),
        },
      ],
    });

    query.id = queryId;

    insertToDatabase(query, token, "query");

    return query.id;
  }
}
