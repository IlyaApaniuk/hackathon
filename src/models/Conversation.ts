import IMessage from "./Message";

export default interface IConversation {
  id: ConversationId;
  subject?: string;
  topicId?: string;
  photoUrl?: string;
  welcomeMessages?: string[];
  custom?: { [name: string]: string };
  lastMessage?: IMessage;
  participants: {
    [id: UserId]: { access: 'ReadWrite' | 'Read'; notify: boolean };
  };
  createdAt: UnixMilliseconds;
}
