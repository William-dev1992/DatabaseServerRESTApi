import { uuid } from "uuidv4";

export class Data {
  public readonly id: string;

  constructor(props: Omit<Data, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid()
    }
  }
}