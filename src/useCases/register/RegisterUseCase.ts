import { producer } from "../../kafkaConnection/connection";

export class RegisterUseCase {
  async execute(command: Record<string, any>) {
    await producer.connect();
    await producer.send({
      topic: "server-events",
      messages: [{ value: JSON.stringify(command) }],
    });
  }
}
