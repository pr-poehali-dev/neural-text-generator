import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все поля',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Отправлено!',
      description: 'Мы получили ваше сообщение и скоро свяжемся с вами',
    });

    setName('');
    setEmail('');
    setMessage('');
  };

  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'hello@aicreator.com',
      href: 'mailto:hello@aicreator.com',
    },
    {
      icon: 'MessageCircle',
      title: 'Telegram',
      value: '@aicreator_bot',
      href: 'https://t.me/aicreator_bot',
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (999) 123-45-67',
      href: 'tel:+79991234567',
    },
  ];

  const socialLinks = [
    { icon: 'Github', label: 'GitHub', href: '#' },
    { icon: 'Twitter', label: 'Twitter', href: '#' },
    { icon: 'Linkedin', label: 'LinkedIn', href: '#' },
    { icon: 'Youtube', label: 'YouTube', href: '#' },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-muted-foreground">
            Есть вопросы? Мы всегда рады помочь!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-primary/20 animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Send" size={24} className="text-primary" />
                Отправить сообщение
              </CardTitle>
              <CardDescription>
                Заполните форму, и мы ответим в ближайшее время
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <Input
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea
                    placeholder="Опишите ваш вопрос или предложение..."
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Info" size={24} className="text-primary" />
                  Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={info.icon as any} size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.title}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Share2" size={24} className="text-primary" />
                  Социальные сети
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center hover:scale-110 transition-transform"
                      title={social.label}
                    >
                      <Icon name={social.icon as any} size={20} className="text-primary" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium mb-1">Время работы</p>
                    <p className="text-sm text-muted-foreground">
                      Понедельник - Пятница: 9:00 - 18:00
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Суббота - Воскресенье: Выходной
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <footer className="mt-20 py-8 border-t border-border">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Sparkles" size={18} className="text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Creator
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 AI Creator. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground">
            Создано с помощью искусственного интеллекта
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
