import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
            <Icon name="Zap" size={16} className="text-primary" />
            <span>Создавайте контент с помощью ИИ</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Творчество без границ с{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              искусственным интеллектом
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Генерируйте тексты, стихи, презентации, песни, дипломы и доклады за секунды. 
            Сохраняйте историю и редактируйте результаты.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 py-6 group"
            >
              Начать создавать
              <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/10"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Посмотреть примеры
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 pt-12">
            {[
              { icon: 'FileText', label: 'Тексты' },
              { icon: 'Feather', label: 'Стихи' },
              { icon: 'Presentation', label: 'Презентации' },
              { icon: 'Music', label: 'Песни' },
              { icon: 'GraduationCap', label: 'Дипломы' },
              { icon: 'BookOpen', label: 'Доклады' },
            ].map((item, index) => (
              <div 
                key={item.label}
                className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name={item.icon as any} size={24} className="text-primary" />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
