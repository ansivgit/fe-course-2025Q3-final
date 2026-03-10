export type MessageRole = 'ai' | 'user';

export type ChatMessage = {
  id: string;
  role: MessageRole;
  text: string;
  timestamp: string;
};

export type ChatTopic = {
  value: string;
  label: string;
};

export type ChatDifficulty = {
  value: string;
  label: string;
};
