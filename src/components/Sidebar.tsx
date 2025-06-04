
import React, { useState } from 'react';
import { Plus, MessageSquare, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
}

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const isMobile = useIsMobile();
  const [conversations] = useState<Conversation[]>([
    {
      id: '1',
      title: 'Welcome Chat',
      lastMessage: 'Hello! How can I help you today?',
      timestamp: new Date(),
    },
    {
      id: '2',
      title: 'Previous Conversation',
      lastMessage: 'That was a great discussion about...',
      timestamp: new Date(Date.now() - 86400000),
    },
    {
      id: '3',
      title: 'Another Chat',
      lastMessage: 'Thanks for the help!',
      timestamp: new Date(Date.now() - 172800000),
    },
  ]);

  const handleNewChat = () => {
    console.log('Starting new chat...');
  };

  if (isMobile) {
    return (
      <>
        {/* Mobile Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onToggle}
          />
        )}
        
        {/* Mobile Sidebar */}
        <div className={`fixed top-0 left-0 h-full w-80 bg-background border-r z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="font-semibold text-lg">Chats</h2>
              <Button variant="ghost" size="icon" onClick={onToggle}>
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            {/* New Chat Button */}
            <div className="p-4">
              <Button onClick={handleNewChat} className="w-full justify-start" variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                New Chat
              </Button>
            </div>
            
            {/* Conversations */}
            <div className="flex-1 overflow-y-auto px-4 pb-4">
              <div className="space-y-2">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className="p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                  >
                    <div className="flex items-start space-x-3">
                      <MessageSquare className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm truncate">{conversation.title}</h3>
                        <p className="text-xs text-muted-foreground truncate mt-1">
                          {conversation.lastMessage}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {conversation.timestamp.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className={`hidden lg:flex flex-col h-screen bg-background border-r transition-all duration-300 ${
      isOpen ? 'w-80' : 'w-16'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        {isOpen && <h2 className="font-semibold text-lg">Chats</h2>}
        <Button variant="ghost" size="icon" onClick={onToggle}>
          <Menu className="w-5 h-5" />
        </Button>
      </div>
      
      {isOpen && (
        <>
          {/* New Chat Button */}
          <div className="p-4">
            <Button onClick={handleNewChat} className="w-full justify-start" variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              New Chat
            </Button>
          </div>
          
          {/* Conversations */}
          <div className="flex-1 overflow-y-auto px-4 pb-4">
            <div className="space-y-2">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className="p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <MessageSquare className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate">{conversation.title}</h3>
                      <p className="text-xs text-muted-foreground truncate mt-1">
                        {conversation.lastMessage}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {conversation.timestamp.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
