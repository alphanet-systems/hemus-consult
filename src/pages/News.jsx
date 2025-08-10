import React, { useState } from 'react'
import { Calendar, ArrowRight, Search, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const News = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const newsArticles = [
    {
      id: 1,
      title: 'Дигитализация на предприятията',
      date: '21.07.2025',
      category: 'EU Проекти',
      excerpt: 'Цел на процедурата: да насърчи инвестициите за въвеждане на съвременни информационни и комуникационни технологии (ИКТ) и по този начин да допринесе за повишаване нивото на дигитализация на предприятията...',
      content: `
        **Цел на процедурата:** да насърчи инвестициите за въвеждане на съвременни информационни и комуникационни технологии (ИКТ) и по този начин да допринесе за повишаване нивото на дигитализация на предприятията и готовността им за последващо преминаване към по-високите нива на цифровизация от областта на Индустрия 4.0

        **Допустими кандидати:**
        1. Tърговци по смисъла на Търговския закон или Закона за кооперациите или действащи адвокатски дружества по смисъла на Закона за адвокатурата.
        2. Регистрирани не по-късно от 31.12.2023 г.
        3. Отговарят на изискванията за малко (персонал от 10 до 49 души) предприятие.
        4. Да са реализирали нетни приходи от продажби общо за 2023 и 2024 финансова година ≥ 100 000 лева.

        **Минимален размер на помощта:** 5 000 лв.
        **Максимален размер на помощта:** 50 000 лв.
        **Процент на финансиране:** 70 %
        **Краен срок за кандидатстване:** 26 септември 2025 г.
      `,
      featured: true
    },
    {
      id: 2,
      title: 'Подкрепа за семейни предприятия, предприятията от творческите индустрии и занаятите (ППК)',
      date: '05.07.2024',
      category: 'Финансиране',
      excerpt: 'Процедурата цели да насърчи инвестициите за подобряване на производствения капацитет на семейните предприятия, предприятията от творческите индустрии и занаятите...',
      content: `
        **1. Цели на процедурата:**
        Процедурата цели да насърчи инвестициите за подобряване на производствения капацитет на семейните предприятия, предприятията от творческите индустрии и занаятите, и по този начин да допринесе за повишаване на тяхната конкурентоспособност и засилване на пазарното им присъствие.

        **2. Бюджет:** 117 514 155 лв.
        **3. Процент на финансиране:** до 85 %
        **4. Минимален размер на БФП за предприятие:** 15 000 лв.
        **5. Максимален размер на БФП за предприятие:** 150 000 лв.

        **Начален срок:** 31.05.2024 г.
        **Краен срок:** 16.09.2024 г.
      `,
      featured: false
    },
    {
      id: 3,
      title: 'От 3 май до 23 май 2022 г. ще могат да се подават проекти по процедура BG16RFOP002-6.002 „Възстановяване на МСП чрез подобряване на енергийната ефективност"',
      date: '14.04.2022',
      category: 'Енергийна ефективност',
      excerpt: 'Целта на подкрепата е осигуряване на инвестиции в енергийно ефективно оборудване, материали и технологии за предприятията и устойчиво възстановяване на икономиката...',
      content: `
        Целта на подкрепата е осигуряване на инвестиции в енергийно ефективно оборудване, материали и технологии за предприятията и устойчиво възстановяване на икономиката. Изготвен е подробен списък с активи с определени референтни цени, от който кандидатите могат да избират.

        Безвъзмездната финансова помощ ще покрие до 50% от инвестицията по проекта.

        **Минималната сума за подкрепа:** 15 000 лева
        **Максималната сума на подкрепата:** 150 000 лева

        По процедурата могат да кандидатстват микро, малки и средни предприятия с основна дейност в сектор производство на икономиката, които имат три приключени финансови години (2020, 2019 и 2018).

        **Общият бюджет на процедурата:** 136 226 120 лева
      `,
      featured: false
    }
  ]

  const categories = ['all', 'EU Проекти', 'Финансиране', 'Енергийна ефективност']

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const [expandedArticle, setExpandedArticle] = useState(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Новини и възможности
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Следете най-новите възможности за финансиране, актуални новини и важни обновления
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Търсене в новините..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm"
                >
                  <Tag className="h-4 w-4 mr-1" />
                  {category === 'all' ? 'Всички' : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredArticles.find(article => article.featured) && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Актуално</h2>
            </div>
            
            {(() => {
              const featuredArticle = filteredArticles.find(article => article.featured)
              return (
                <Card className="overflow-hidden border-l-4 border-l-blue-600">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-blue-600">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredArticle.date}</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {featuredArticle.category}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mt-2">
                      {featuredArticle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardDescription className="text-gray-600 text-lg mb-6">
                      {featuredArticle.excerpt}
                    </CardDescription>
                    
                    {expandedArticle === featuredArticle.id ? (
                      <div className="prose max-w-none mb-6">
                        <div className="whitespace-pre-line text-gray-700">
                          {featuredArticle.content}
                        </div>
                      </div>
                    ) : null}
                    
                    <Button 
                      onClick={() => setExpandedArticle(expandedArticle === featuredArticle.id ? null : featuredArticle.id)}
                      size="lg"
                    >
                      {expandedArticle === featuredArticle.id ? 'Скрий детайли' : 'Прочети повече'}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })()}
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Всички новини</h2>
            <p className="text-gray-600">
              Намерени {filteredArticles.length} резултата
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.filter(article => !article.featured).map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                      {article.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                  
                  {expandedArticle === article.id && (
                    <div className="prose max-w-none mb-4">
                      <div className="whitespace-pre-line text-gray-700 text-sm">
                        {article.content}
                      </div>
                    </div>
                  )}
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                    className="w-full"
                  >
                    {expandedArticle === article.id ? 'Скрий детайли' : 'Прочети повече'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-4">
                Няма намерени резултати за "{searchTerm}"
              </div>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
              >
                Изчисти филтрите
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Не пропускайте възможности
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свържете се с нас, за да получавате актуална информация за нови възможности за финансиране
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <a href="/contact">
              Свържете се с нас
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default News

