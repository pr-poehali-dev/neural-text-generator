import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface Generation {
  id: string;
  type: string;
  prompt: string;
  result: string;
  timestamp: number;
}

const contentTypes = [
  { value: 'text', label: 'Текст', icon: 'FileText', placeholder: 'Напишите статью о...' },
  { value: 'poem', label: 'Стихотворение', icon: 'Feather', placeholder: 'Сочините стихотворение о...' },
  { value: 'presentation', label: 'Презентация', icon: 'Presentation', placeholder: 'Создайте презентацию на тему...' },
  { value: 'song', label: 'Песня', icon: 'Music', placeholder: 'Напишите песню о...' },
  { value: 'diploma', label: 'Диплом', icon: 'GraduationCap', placeholder: 'Создайте дипломную работу о...' },
  { value: 'report', label: 'Доклад', icon: 'BookOpen', placeholder: 'Подготовьте доклад о...' },
];

const Generator = () => {
  const [contentType, setContentType] = useState('text');
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generations, setGenerations] = useState<Generation[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedText, setEditedText] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem('ai-generations');
    if (saved) {
      setGenerations(JSON.parse(saved));
    }
  }, []);

  const saveToLocalStorage = (gens: Generation[]) => {
    localStorage.setItem('ai-generations', JSON.stringify(gens));
  };

  const generateContent = async () => {
    if (!prompt.trim()) {
      toast({
        title: 'Ошибка',
        description: 'Введите запрос для генерации',
        variant: 'destructive',
      });
      return;
    }

    setIsGenerating(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    const mockResults: Record<string, string> = {
      text: `# ${prompt}\n\nЭто пример сгенерированного текста на основе вашего запроса. В реальной версии здесь будет содержательный текст, созданный искусственным интеллектом.\n\nТекст будет структурирован по параграфам, содержать ключевые идеи и логически связанные аргументы. ИИ учитывает контекст вашего запроса и создаёт релевантный контент.\n\nВы можете редактировать этот текст, нажав на кнопку редактирования в истории генераций.`,
      poem: `О ${prompt}\n\nСквозь строки цифрового света,\nИскусственный рассудок пишет строки,\nГде рифмы льются как монеты,\nИ смысл глубокий в каждой вехе.\n\nТворчество без вдохновенья?\nНет, это новая эпоха!\nГде человек и ИИ в едином пенье\nСоздают шедевры — это не плохо!`,
      presentation: `# Презентация: ${prompt}\n\n## Слайд 1: Введение\n- Тема презентации\n- Актуальность\n- Цели и задачи\n\n## Слайд 2: Основная часть\n- Ключевые пункты\n- Анализ ситуации\n- Данные и статистика\n\n## Слайд 3: Выводы\n- Основные результаты\n- Рекомендации\n- Перспективы развития`,
      song: `🎵 ${prompt} 🎵\n\n[Куплет 1]\nВ мире цифровых идей,\nГде алгоритмы правят бал,\nРождается мелодия быстрей,\nЧем кто-то мог бы ожидать.\n\n[Припев]\nТворчество и технологии,\nВместе создают мечты,\nНовые методологии,\nОткрывают нам пути!\n\n[Куплет 2]\nИскусственный интеллект поёт,\nО будущем, что нас всех ждёт,\nГде каждый сможет и найдёт,\nСвой голос, что в душе живёт.`,
      diploma: `# Дипломная работа\n## Тема: ${prompt}\n\n### Введение\nАктуальность исследования обусловлена современными тенденциями...\n\n### Глава 1: Теоретические основы\n1.1 Обзор литературы\n1.2 Понятийный аппарат\n1.3 Методология исследования\n\n### Глава 2: Практическая часть\n2.1 Анализ текущей ситуации\n2.2 Разработка решения\n2.3 Апробация результатов\n\n### Заключение\nВ ходе исследования были получены следующие результаты...`,
      report: `# Доклад на тему: ${prompt}\n\n## Вступление\nУважаемые коллеги! Представляю вашему вниманию доклад, посвящённый актуальной теме...\n\n## Основная часть\n\n### Пункт 1: Контекст проблемы\nСовременная ситуация характеризуется...\n\n### Пункт 2: Анализ данных\nПо результатам исследования...\n\n### Пункт 3: Предложения\nНа основе проведённого анализа предлагается...\n\n## Заключение\nПодводя итоги, можно сделать следующие выводы...`,
    };

    const newGeneration: Generation = {
      id: Date.now().toString(),
      type: contentType,
      prompt,
      result: mockResults[contentType] || mockResults.text,
      timestamp: Date.now(),
    };

    const updated = [newGeneration, ...generations];
    setGenerations(updated);
    saveToLocalStorage(updated);
    
    setIsGenerating(false);
    setPrompt('');
    
    toast({
      title: 'Готово!',
      description: 'Контент успешно сгенерирован',
    });
  };

  const deleteGeneration = (id: string) => {
    const updated = generations.filter(g => g.id !== id);
    setGenerations(updated);
    saveToLocalStorage(updated);
    toast({
      title: 'Удалено',
      description: 'Генерация удалена из истории',
    });
  };

  const startEditing = (id: string, text: string) => {
    setEditingId(id);
    setEditedText(text);
  };

  const saveEdit = (id: string) => {
    const updated = generations.map(g => 
      g.id === id ? { ...g, result: editedText } : g
    );
    setGenerations(updated);
    saveToLocalStorage(updated);
    setEditingId(null);
    toast({
      title: 'Сохранено',
      description: 'Изменения успешно сохранены',
    });
  };

  const currentType = contentTypes.find(t => t.value === contentType);

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Генератор контента
          </h2>
          <p className="text-xl text-muted-foreground">
            Выберите тип контента и опишите, что хотите создать
          </p>
        </div>

        <Tabs defaultValue="create" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="create" className="gap-2">
              <Icon name="Plus" size={18} />
              Создать
            </TabsTrigger>
            <TabsTrigger value="history" className="gap-2">
              <Icon name="History" size={18} />
              История ({generations.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="space-y-6 mt-8">
            <Card className="border-primary/20 animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Wand2" size={24} className="text-primary" />
                  Новая генерация
                </CardTitle>
                <CardDescription>
                  Заполните форму ниже для создания контента
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Тип контента</label>
                  <Select value={contentType} onValueChange={setContentType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {contentTypes.map(type => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center gap-2">
                            <Icon name={type.icon as any} size={16} />
                            {type.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваш запрос</label>
                  <Textarea
                    placeholder={currentType?.placeholder}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <Button
                  onClick={generateContent}
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Генерация...
                    </>
                  ) : (
                    <>
                      <Icon name="Sparkles" size={20} className="mr-2" />
                      Сгенерировать
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4 mt-8">
            {generations.length === 0 ? (
              <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <Icon name="FileX" size={48} className="text-muted-foreground mb-4" />
                  <p className="text-lg text-muted-foreground">
                    История пуста
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Создайте свою первую генерацию
                  </p>
                </CardContent>
              </Card>
            ) : (
              generations.map((gen, index) => {
                const type = contentTypes.find(t => t.value === gen.type);
                const isEditing = editingId === gen.id;
                
                return (
                  <Card 
                    key={gen.id} 
                    className="border-primary/20 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <Icon name={type?.icon as any || 'FileText'} size={20} className="text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{type?.label}</CardTitle>
                            <CardDescription className="text-sm">
                              {new Date(gen.timestamp).toLocaleString('ru-RU')}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {!isEditing && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => startEditing(gen.id, gen.result)}
                            >
                              <Icon name="Edit" size={16} />
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteGeneration(gen.id)}
                          >
                            <Icon name="Trash2" size={16} className="text-destructive" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">Запрос:</p>
                        <p className="text-sm bg-muted p-3 rounded-lg">{gen.prompt}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">Результат:</p>
                        {isEditing ? (
                          <div className="space-y-2">
                            <Textarea
                              value={editedText}
                              onChange={(e) => setEditedText(e.target.value)}
                              rows={10}
                              className="font-mono text-sm"
                            />
                            <div className="flex gap-2">
                              <Button onClick={() => saveEdit(gen.id)} size="sm">
                                <Icon name="Save" size={16} className="mr-2" />
                                Сохранить
                              </Button>
                              <Button onClick={() => setEditingId(null)} variant="outline" size="sm">
                                Отмена
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="bg-muted p-4 rounded-lg whitespace-pre-wrap text-sm">
                            {gen.result}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Generator;
