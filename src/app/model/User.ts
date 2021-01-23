export class User {
  id: string;
  name: string;
  email: string;
  description: string;
  registered: Date;


  constructor(id: string, name: string, email: string, description: string, registered: Date) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.description = description;
    this.registered = registered;
  }
}
