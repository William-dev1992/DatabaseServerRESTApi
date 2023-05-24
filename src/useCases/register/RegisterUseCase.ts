import { idGenerator } from "@/helpers/idGenerator";
import { producer } from "@/kafkaConnection/connection";
import insertToDatabase from "@/db/insertToDatabase";

export class RegisterUseCase {
  async execute(data: Record<string, any>, token: string): Promise<String> {
    data.id = idGenerator();

    await producer.connect();
    await producer.send({
      topic: "server-registers",
      messages: [{ value: JSON.stringify(data) }],
    });

    insertToDatabase(data, token, "insertion");

    return data.id;
  }
}
