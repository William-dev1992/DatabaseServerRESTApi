import { idGenerator } from "@/helpers/idGenerator";
import { producer } from "@/kafkaConnection/connection";
import { dataTypes } from "@/helpers/globalStrings";
import Data from "@/models/Data";

export class RegisterUseCase {
  async execute(data: Record<string, any>): Promise<String> {
    data.id = idGenerator();

    await producer.connect();
    await producer.send({
      topic: "server-events",
      messages: [
        {
          value: JSON.stringify(data),
        },
      ],
    });

    await this.insertToDatabase(data);

    return data.id;
  }

  async insertToDatabase(data: Record<string, any>): Promise<void> {
    let cleanData = Object.assign({}, data);

    delete cleanData.id;

    const obj = {
      _id: data.id,
      dataType: dataTypes.insertion,
      userId: "a",
      data: cleanData,
      result: "",
      status: 1,
    };

    const newData = new Data(obj);

    newData.save();
  }
}
