import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const examples = [
  {
    type: 'Текст',
    icon: 'FileText',
    title: 'Статья о технологиях',
    description: 'Искусственный интеллект в современном мире',
    preview: 'Искусственный интеллект стал неотъемлемой частью нашей жизни. От персональных ассистентов до автоматизации производства...',
    tags: ['AI', 'Технологии', 'Будущее'],
  },
  {
    type: 'Стихотворение',
    icon: 'Feather',
    title: 'Ода творчеству',
    description: 'Поэтическое размышление о вдохновении',
    preview: 'Сквозь призму цифровых миров,\nГде алгоритмы правят бал,\nРождается поток стихов,\nЧто раньше человек создал...',
    tags: ['Поэзия', 'Творчество', 'Вдохновение'],
  },
  {
    type: 'Презентация',
    icon: 'Presentation',
    title: 'Бизнес-план стартапа',
    description: 'Структурированная презентация идеи',
    preview: 'Введение: Анализ рынка • Целевая аудитория • Конкурентные преимущества • Финансовая модель • Roadmap развития',
    tags: ['Бизнес', 'Стартап', 'Инвестиции'],
  },
  {
    type: 'Песня',
    icon: 'Music',
    title: 'Летний хит',
    description: 'Позитивная композиция о лете',
    preview: '[Куплет] Солнце светит ярко нам, Море плещет по волнам... [Припев] Это лето, это праздник, Это радость каждый раз...',
    tags: ['Музыка', 'Лето', 'Позитив'],
  },
  {
    type: 'Диплом',
    icon: 'GraduationCap',
    title: 'Исследование AI',
    description: 'Дипломная работа по машинному обучению',
    preview: 'Глава 1: Теоретические основы машинного обучения. Глава 2: Практическое применение нейронных сетей...',
    tags: ['Наука', 'ML', 'Исследование'],
  },
  {
    type: 'Доклад',
    icon: 'BookOpen',
    title: 'Тренды 2024',
    description: 'Аналитический доклад о трендах года',
    preview: 'Введение: Текущая ситуация на рынке. Основная часть: Ключевые тренды и их влияние. Выводы: Прогнозы и рекомендации...',
    tags: ['Аналитика', 'Тренды', '2024'],
  },
];

const Examples = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Примеры работ
          </h2>
          <p className="text-xl text-muted-foreground">
            Посмотрите, что можно создать с помощью AI Creator
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <Card 
              key={index}
              className="border-primary/20 hover:border-primary/50 transition-all hover:scale-105 cursor-pointer group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={example.icon as any} size={24} className="text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {example.type}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3 bg-muted p-3 rounded-lg">
                  {example.preview}
                </p>
                <div className="flex flex-wrap gap-2">
                  {example.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Examples;
