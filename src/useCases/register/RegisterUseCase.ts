import { idGenerator } from "../../helpers/idGenerator";
import { producer } from "../../kafkaConnection/connection";

export class RegisterUseCase {
  async execute(command: Record<string, any>): Promise<void> {
    command.id = idGenerator();

    await producer.connect();
    await producer.send({
      topic: "server-events",
      messages: [
        {
          value: JSON.stringify(command),
        },
      ],
    });
  }
}
