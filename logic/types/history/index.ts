/**
 * This file was automatically generated by joi-to-typescript
 * Do not modify this file manually
 */

export interface addMessage {
  body?: {
    content: string;
    role: 'user' | 'system' | 'assistant';
  };
  query?: {
    id: string;
  };
}

export interface createHistory {
  body?: {
    content: string;
    role: 'user' | 'system' | 'assistant';
  };
  query?: object;
}

export interface createSystemMessage {
  body?: {
    content: string;
    key: string;
    role?: string;
  };
  query?: object;
}

export interface deleteSystemMessage {
  query?: {
    key: string;
  };
}

export interface getHistory {
  body?: object;
  query?: {
    id: string;
  };
}

export interface getSystemMessage {
  query?: {
    key: string;
  };
}

export interface getSystemMessages {
  query?: {
    key?: string;
  };
}

export interface history {
  messages: ({
    content: string;
    role: 'user' | 'system' | 'assistant';
  })[];
}

export interface message {
  content: string;
  role: 'user' | 'system' | 'assistant';
}

export interface systemMessage {
  content: string;
  key: string;
  role?: string;
}

export interface updateSystemMessage {
  body?: {
    content: string;
    key: string;
    role?: string;
  };
  query?: {
    key: string;
  };
}