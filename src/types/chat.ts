export type MessageRole = 'mentor' | 'user';

export type ChatMessage = {
  id: string;
  role: MessageRole;
  text: string;
  timestamp: string;
};

export type SelectOption = {
  value: string;
  label: string;
};
