
import React from 'react';
import { Bot, User } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex items-start space-x-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
          <Bot className="w-4 h-4 text-primary-foreground" />
        </div>
      )}
      
      <div className={`rounded-2xl px-4 py-3 max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl shadow-sm ${
        isUser 
          ? 'bg-primary text-primary-foreground ml-auto' 
          : 'bg-muted text-foreground'
      }`}>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        <p className={`text-xs mt-2 ${
          isUser ? 'text-primary-foreground/70' : 'text-muted-foreground'
        }`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
      
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
          <User className="w-4 h-4 text-secondary-foreground" />
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
