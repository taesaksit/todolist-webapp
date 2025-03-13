export interface TTodos {
  _id: string;
  owner: Owner;
  title: string;
  description: string;
  priority: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Owner {
  _id: string;
  firstname: string;
}

export interface TCraeteTodos {
  title: string;
  description?: string;
  priority: string;
}

export interface TUpdateTodos {
  title?: string;
  description?: string;
  priority?: string;
  status?:string;
}

export interface TDeleteTodos {
  _id : string
}
