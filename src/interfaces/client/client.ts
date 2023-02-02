export interface IClientRequest {
  name: string;
  email: string;
  password: string;
  telephone: string;
}

export interface IUpdateClientRequest {
  id: string;
  name: string;
  email: string;
  password: string;
  telephone: string;
}

export interface ILoginRequest {
  email: string
  password: string
}