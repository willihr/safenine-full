export interface Alert {
  id: number;
  timestamp: number;
  type: 'warning' | 'error';
  pacientId: number;
  pacientName: string | undefined;
  message: string;
  seen: boolean;
}

export interface Message {
  id: number;
  pacientId: number;
  message: string;
}

export interface Measure {
  id: number;
  pacientId: number;
  timestamp: number;
  sensor1: number;
  sensor2: number;
  sensor3: number;
}

export interface PacientInfo {
  id: number;
  name: string;
  age: number;
  sensor1: number;
  sensor2: number;
  sensor3: number;
}

// export interface ServerResponseDTO {
//   conexao: boolean;
//   alerts: Alert[];
//   messages: Message[];
//   pacients: PacientInfo[];
// }

// export const defaultServerResponse: ServerResponseDTO = {
//   conexao: false,
//   alerts: [],
//   messages: [],
//   pacients: [],
// };
