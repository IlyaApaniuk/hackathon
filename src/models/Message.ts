export default interface IMessage {
  attachment: { url: string; size: number } | null;
  conversationId: string;
  createdAt: UnixMilliseconds;
  editedAt: UnixMilliseconds | null;
  custom: { [name: string]: string };
  id: MessageId;
  location: [number, number] | null;
  origin: "web" | "rest" | "email" | "import";
  readBy: UserId[];
  senderId: UserId;
  text: string;
  type: "UserMessage" | "SystemMessage";
  referencedMessageId: string | null;
}
