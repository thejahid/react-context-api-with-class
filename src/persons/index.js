import axios from "axios";

export default class Persons {
  async getPerson() {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return data;
    } catch (e) {
      throw new Error(e);
    }
  }
}
