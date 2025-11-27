import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const blogPosts = [
  {
    title: 'Как AI меняет креативные индустрии',
    description: 'Исследуем влияние искусственного интеллекта на творческие профессии и новые возможности для создателей контента.',
    date: '15 ноября 2024',
    readTime: '5 мин',
    image: '🎨',
    category: 'Тренды',
  },
  {
    title: 'Этика использования AI в творчестве',
    description: 'Разбираемся в вопросах авторских прав, оригинальности и этических аспектах AI-генерации контента.',
    date: '10 ноября 2024',
    readTime: '7 мин',
    image: '⚖️',
    category: 'Этика',
  },
  {
    title: 'Топ-10 промптов для качественного контента',
    description: 'Практические советы по составлению запросов для получения наилучших результатов от AI-генераторов.',
    date: '5 ноября 2024',
    readTime: '4 мин',
    image: '💡',
    category: 'Гайды',
  },
  {
    title: 'Будущее AI-ассистентов в образовании',
    description: 'Как искусственный интеллект помогает студентам и преподавателям в создании учебных материалов.',
    date: '1 ноября 2024',
    readTime: '6 мин',
    image: '🎓',
    category: 'Образование',
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Блог о AI
          </h2>
          <p className="text-xl text-muted-foreground">
            Статьи, новости и исследования о мире искусственного интеллекта
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="border-primary/20 hover:border-primary/50 transition-all cursor-pointer group animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                {post.image}
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-1 bg-primary/20 rounded-full text-primary font-medium">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Icon name="Clock" size={12} />
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="gap-2 group/btn">
                  Читать далее
                  <Icon name="ArrowRight" size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="gap-2">
            <Icon name="BookOpen" size={20} />
            Посмотреть все статьи
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
