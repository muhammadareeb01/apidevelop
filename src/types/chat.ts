export interface Message {
  role: 'user' | 'assistant';
  content: string;
  attachments?: string[];
}

export interface ChatResponse {
  message: string;
  error?: string;
}