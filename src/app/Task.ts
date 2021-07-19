export interface Task {
  id: Date;
  name: string;

}

export class Todo{

  constructor(id: Date, description: string) {
    this.id = id;
    this.description = description;
  }

  id: Date = new Date();
  description: string = '';

  static value(array: Todo[], search: Date): any{
    return getValue(array, search);
  }
}

function getValue(array: Todo[], search: Date): any {
  let i = array.length;
  while (i--) {
    if (array[i].id === search) {
      return i;
    }
  }
}
