import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [selectedService, setSelectedService] = useState('');
  const [pages, setPages] = useState('1');
  const { toast } = useToast();

  const services = [
    {
      icon: 'FileText',
      title: 'Перевод документов',
      description: 'Паспорта, дипломы, свидетельства, договоры',
      price: 'от 500₽/стр'
    },
    {
      icon: 'Scale',
      title: 'Юридический перевод',
      description: 'Договоры, уставы, доверенности',
      price: 'от 800₽/стр'
    },
    {
      icon: 'Building',
      title: 'Технический перевод',
      description: 'Инструкции, спецификации, чертежи',
      price: 'от 700₽/стр'
    },
    {
      icon: 'Stethoscope',
      title: 'Медицинский перевод',
      description: 'Справки, выписки, результаты анализов',
      price: 'от 650₽/стр'
    },
    {
      icon: 'Award',
      title: 'Нотариальное заверение',
      description: 'Официальное заверение переводов',
      price: 'от 1200₽/док'
    },
    {
      icon: 'Globe',
      title: 'Апостиль',
      description: 'Легализация документов для международного использования',
      price: 'от 2500₽/док'
    }
  ];

  const languages = [
    'Английский',
    'Немецкий',
    'Французский',
    'Испанский',
    'Итальянский',
    'Китайский',
    'Арабский',
    'Турецкий',
    'Другой'
  ];

  const calculatePrice = () => {
    const basePrices: { [key: string]: number } = {
      'Перевод документов': 500,
      'Юридический перевод': 800,
      'Технический перевод': 700,
      'Медицинский перевод': 650,
      'Нотариальное заверение': 1200,
      'Апостиль': 2500
    };

    const basePrice = basePrices[selectedService] || 500;
    const numPages = parseInt(pages) || 1;
    
    return basePrice * numPages;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время для уточнения деталей.',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Languages" size={32} className="text-primary" />
              <span className="text-2xl font-heading font-bold text-secondary">TranslatePro</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#home" className="hover:text-primary transition-colors font-medium">Главная</a>
              <a href="#services" className="hover:text-primary transition-colors font-medium">Услуги</a>
              <a href="#order" className="hover:text-primary transition-colors font-medium">Заказать</a>
            </nav>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              Связаться
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-secondary leading-tight">
                Профессиональный перевод документов
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Качественные переводы с нотариальным заверением и апостилем. 
                Более 15 лет опыта работы с официальными документами.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Заказать перевод
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Калькулятор стоимости
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-600 mt-1">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">25K+</div>
                  <div className="text-sm text-gray-600 mt-1">документов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-600 mt-1">языков</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/ddd99f68-69f7-403a-8047-87ffba45b37b.jpeg" 
                alt="Образец паспорта"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold">100% конфиденциальность</div>
                    <div className="text-sm text-gray-600">Защита данных</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Предоставляем полный спектр услуг по переводу и заверению документов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-heading font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
              Заказать перевод
            </h2>
            <p className="text-xl text-gray-600">
              Заполните форму, и мы свяжемся с вами в течение 15 минут
            </p>
          </div>
          <Card className="shadow-xl border-2 animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" required />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="service">Тип услуги</Label>
                    <Select value={selectedService} onValueChange={setSelectedService} required>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.title} value={service.title}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">Язык перевода</Label>
                    <Select required>
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Выберите язык" />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map((lang) => (
                          <SelectItem key={lang} value={lang}>
                            {lang}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pages">Количество страниц</Label>
                  <Input 
                    id="pages" 
                    type="number" 
                    min="1" 
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}
                    placeholder="1" 
                    required 
                  />
                </div>
                {selectedService && (
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-semibold text-lg">Предварительная стоимость:</span>
                      <span className="text-2xl font-heading font-bold text-primary">
                        {calculatePrice().toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Укажите особые требования к переводу, срочность выполнения и другие детали"
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="file" className="flex items-center gap-2">
                    <Icon name="Upload" size={18} />
                    Прикрепить документ
                  </Label>
                  <Input id="file" type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" multiple />
                  <p className="text-sm text-gray-500">Поддерживаемые форматы: PDF, JPG, PNG, DOC, DOCX</p>
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Languages" size={28} className="text-primary" />
                <span className="text-xl font-heading font-bold">TranslatePro</span>
              </div>
              <p className="text-gray-300">
                Профессиональные переводы с 2009 года
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@translatepro.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 1</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Перевод документов</li>
                <li>Нотариальное заверение</li>
                <li>Апостиль</li>
                <li>Срочный перевод</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Режим работы</h3>
              <div className="space-y-2 text-gray-300">
                <div>Пн-Пт: 9:00 - 19:00</div>
                <div>Сб: 10:00 - 16:00</div>
                <div>Вс: выходной</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 TranslatePro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
