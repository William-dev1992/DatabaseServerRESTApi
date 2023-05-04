import { idGenerator } from "@/helpers/idGenerator";
import { producer } from "@/kafkaConnection/connection";
import { dataTypes } from "@/helpers/globalStrings";
import { decodeUserToken } from "@/helpers/decodeUserToken";
import Data from "@/models/Data";

export class RegisterUseCase {
  async execute(data: Record<string, any>, token: string): Promise<String> {
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

    await this._insertToDatabase(data, token);

    return data.id;
  }

  async _insertToDatabase(
    data: Record<string, any>,
    token: string
  ): Promise<void> {
    let cleanData = Object.assign({}, data);

    delete cleanData.id;

    const obj = {
      _id: data.id,
      dataType: dataTypes.insertion,
      userId: decodeUserToken(token),
      data: cleanData,
      result: "",
      status: 1,
    };

    const newData = new Data(obj);

    newData.save();
  }
}
