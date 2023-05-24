import { decodeUserToken } from "@/helpers/decodeUserToken";
import { dataTypes } from "@/helpers/globalStrings";
import Data from "@/models/Data";

export default function (
  data: Record<string, any>,
  token: string,
  dataTypeName: string
): void {
  let cleanData = Object.assign({}, data);

  delete cleanData.id;

  const obj = {
    _id: data.id,
    dataType: dataTypes[dataTypeName],
    userId: decodeUserToken(token),
    data: cleanData,
    result: "",
    status: 1,
  };

  const newData = new Data(obj);

  newData.save();
}
