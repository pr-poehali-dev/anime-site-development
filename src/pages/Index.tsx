import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function Index() {
  const episodes = [
    { id: 1, title: "Новое начало", watched: true, duration: "24 мин" },
    { id: 2, title: "Сила дружбы", watched: true, duration: "24 мин" },
    { id: 3, title: "Тёмные тайны", watched: false, duration: "24 мин" },
    { id: 4, title: "Последняя битва", watched: false, duration: "24 мин" },
  ];

  const news = [
    {
      id: 1,
      title: "Анонсирован второй сезон!",
      date: "2024-09-10",
      preview: "Студия официально подтвердила производство нового сезона..."
    },
    {
      id: 2,
      title: "Новые персонажи в грядущих эпизодах",
      date: "2024-09-08",
      preview: "Создатели намекают на появление загадочных союзников..."
    },
    {
      id: 3,
      title: "Интервью с главным режиссёром",
      date: "2024-09-05",
      preview: "Эксклюзивное интервью о создании анимационных сцен..."
    }
  ];

  const galleryImages = [
    "/img/2cbe36db-b3ab-41d0-804c-21b89def81fb.jpg",
    "/img/039d15c2-f74b-42f6-a9da-657adb9afcdc.jpg", 
    "/img/024a397a-467f-4842-8fb9-12ce637287fb.jpg"
  ];

  const wallpapers = [
    { id: 1, title: "Главная героиня", resolution: "1920x1080", image: "/img/2cbe36db-b3ab-41d0-804c-21b89def81fb.jpg" },
    { id: 2, title: "Природный пейзаж", resolution: "1920x1080", image: "/img/039d15c2-f74b-42f6-a9da-657adb9afcdc.jpg" },
    { id: 3, title: "Герой в действии", resolution: "1920x1080", image: "/img/024a397a-467f-4842-8fb9-12ce637287fb.jpg" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-coral">AnimeVerse</h1>
            <nav className="flex space-x-6">
              <a href="#home" className="text-dark-navy hover:text-coral transition-colors">Главная</a>
              <a href="#gallery" className="text-dark-navy hover:text-coral transition-colors">Галерея</a>
              <a href="#news" className="text-dark-navy hover:text-coral transition-colors">Новости</a>
              <a href="#episodes" className="text-dark-navy hover:text-coral transition-colors">Эпизоды</a>
              <a href="#wallpapers" className="text-dark-navy hover:text-coral transition-colors">Обои</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-coral to-teal bg-clip-text text-transparent">
              Добро пожаловать в AnimeVerse
            </h1>
            <p className="text-xl text-dark-navy/80 mb-8 max-w-2xl mx-auto">
              Окунитесь в удивительный мир аниме с нашим фансайтом. 
              Эпизоды, новости, галерея и эксклюзивные обои - всё в одном месте.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-coral hover:bg-coral/90 text-white px-8 py-3 text-lg animate-scale-in">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть сейчас
              </Button>
              <Button variant="outline" className="border-teal text-teal hover:bg-teal hover:text-white px-8 py-3 text-lg animate-scale-in">
                <Icon name="Heart" size={20} className="mr-2" />
                В избранное
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12">
            <TabsTrigger value="gallery" className="text-lg">
              <Icon name="Image" size={20} className="mr-2" />
              Галерея
            </TabsTrigger>
            <TabsTrigger value="news" className="text-lg">
              <Icon name="Newspaper" size={20} className="mr-2" />
              Новости
            </TabsTrigger>
            <TabsTrigger value="episodes" className="text-lg">
              <Icon name="Film" size={20} className="mr-2" />
              Эпизоды
            </TabsTrigger>
            <TabsTrigger value="wallpapers" className="text-lg">
              <Icon name="Download" size={20} className="mr-2" />
              Обои
            </TabsTrigger>
          </TabsList>

          {/* Gallery Section */}
          <TabsContent value="gallery" className="space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-dark-navy">Галерея персонажей</h2>
              <p className="text-lg text-dark-navy/70">Лучшие моменты и арты из аниме</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <Card key={index} className="overflow-hidden hover:scale-105 transition-transform duration-300 animate-scale-in shadow-lg">
                  <CardContent className="p-0">
                    <img 
                      src={image} 
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* News Section */}
          <TabsContent value="news" className="space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-dark-navy">Последние новости</h2>
              <p className="text-lg text-dark-navy/70">Будьте в курсе всех событий</p>
            </div>
            <div className="grid gap-6">
              {news.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-all duration-300 animate-scale-in">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-dark-navy hover:text-coral transition-colors cursor-pointer">
                        {item.title}
                      </CardTitle>
                      <Badge variant="secondary" className="bg-teal/10 text-teal">
                        {new Date(item.date).toLocaleDateString('ru-RU')}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-dark-navy/80">{item.preview}</p>
                    <Button variant="link" className="text-coral p-0 mt-2">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Episodes Section */}
          <TabsContent value="episodes" className="space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-dark-navy">Список эпизодов</h2>
              <p className="text-lg text-dark-navy/70">Следите за своим прогрессом просмотра</p>
            </div>
            <div className="grid gap-4">
              {episodes.map((episode) => (
                <Card key={episode.id} className="hover:shadow-lg transition-all duration-300 animate-scale-in">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-coral/10 rounded-full">
                        <span className="text-coral font-bold">{episode.id}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-dark-navy">{episode.title}</h3>
                        <p className="text-sm text-dark-navy/60">{episode.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {episode.watched ? (
                        <Badge className="bg-green-500 text-white">
                          <Icon name="Check" size={14} className="mr-1" />
                          Просмотрено
                        </Badge>
                      ) : (
                        <Button className="bg-coral hover:bg-coral/90 text-white">
                          <Icon name="Play" size={16} className="mr-2" />
                          Смотреть
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Wallpapers Section */}
          <TabsContent value="wallpapers" className="space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-dark-navy">Обои для рабочего стола</h2>
              <p className="text-lg text-dark-navy/70">Скачайте красивые обои в высоком разрешении</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {wallpapers.map((wallpaper) => (
                <Card key={wallpaper.id} className="overflow-hidden hover:scale-105 transition-all duration-300 animate-scale-in shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={wallpaper.image} 
                        alt={wallpaper.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button className="bg-white text-dark-navy hover:bg-white/90">
                          <Icon name="Download" size={16} className="mr-2" />
                          Скачать
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-dark-navy">{wallpaper.title}</CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {wallpaper.resolution}
                    </Badge>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-dark-navy text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">AnimeVerse</h3>
            <p className="text-white/80 mb-6">Ваш путеводитель в мир аниме</p>
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="sm" className="text-white hover:text-coral">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-coral">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-coral">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 text-white/60">
              <p>&copy; 2024 AnimeVerse. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}