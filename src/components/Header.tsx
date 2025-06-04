
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const isMobile = useIsMobile();

  return (
    <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-between px-4 lg:px-6">
      <div className="flex items-center space-x-4">
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={onMenuToggle}>
            <Menu className="w-5 h-5" />
          </Button>
        )}
        <h1 className="text-xl font-semibold">AI Chat Assistant</h1>
      </div>
      
      <div className="flex items-center space-x-2">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
