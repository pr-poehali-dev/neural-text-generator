import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'generator', label: 'Генератор', icon: 'Sparkles' },
    { id: 'examples', label: 'Примеры', icon: 'FileText' },
    { id: 'blog', label: 'Блог', icon: 'BookOpen' },
    { id: 'contact', label: 'Контакты', icon: 'Mail' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Creator
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                onClick={() => onNavigate(item.id)}
                className="gap-2"
              >
                <Icon name={item.icon as any} size={18} />
                {item.label}
              </Button>
            ))}
          </div>
          
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            Начать
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
