
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ChatInterface from '@/components/ChatInterface';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen flex bg-background">
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuToggle={toggleSidebar} />
        <ChatInterface />
      </div>
    </div>
  );
};

export default Index;
