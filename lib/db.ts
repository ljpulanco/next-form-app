import Dexie, { Table } from "dexie";

export interface User {
  id?: number;
  patientName: string;
  age: number;
  serviceDate: string;
  dob: string;
  address?: string;
  signature: string;
}

class MyDatabase extends Dexie {
  users!: Table<User>;

  constructor() {
    super("MyDatabase");
    this.version(1).stores({
      users: "++id, patientName, age, serviceDate, dob, address, signature",
    });
  }
}

const db = new MyDatabase();
export default db;
