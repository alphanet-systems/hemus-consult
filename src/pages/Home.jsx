import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, Award, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import heroBackground from '../assets/hero_background.png'
import servicesConsulting from '../assets/services_consulting.png'
import servicesEvaluation from '../assets/services_evaluation.png'
import servicesRealEstate from '../assets/services_realestate.png'
import euProjectsIcon from '../assets/eu_projects_icon.png'
import aboutTeam from '../assets/about_team.png'

const Home = () => {
  const services = [
    {
      title: 'Европроекти',
      description: 'Подготовка и управление на проекти финансирани от национални и европейски фондове',
      icon: euProjectsIcon,
      link: '/services'
    },
    {
      title: 'Експертни оценки',
      description: 'Изготвяне на експертни пазарни оценки на недвижими имоти, машини и съоръжения',
      icon: servicesEvaluation,
      link: '/services'
    },
    {
      title: 'Недвижими имоти',
      description: 'Консултации и посредничество при търговия с недвижими имоти',
      icon: servicesRealEstate,
      link: '/properties'
    }
  ]

  const stats = [
    { number: '30+', label: 'Години опит' },
    { number: '500+', label: 'Успешни проекти' },
    { number: '100+', label: 'Доволни клиенти' },
    { number: '24/7', label: 'Поддръжка' }
  ]

  const recentNews = [
    {
      title: 'Дигитализация на предприятията',
      date: '21.07.2025',
      excerpt: 'Цел на процедурата: да насърчи инвестициите за въвеждане на съвременни информационни и комуникационни технологии...'
    },
    {
      title: 'Подкрепа за семейни предприятия',
      date: '05.07.2024',
      excerpt: 'Процедурата цели да насърчи инвестициите за подобряване на производствения капацитет на семейните предприятия...'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-24 lg:py-32"
        style={{ backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url(${heroBackground})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ХЕМУС КОНСУЛТ
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Експертни консултантски услуги за вашия успех
            </p>
            <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
              Специализирани в изготвяне на експертни пазарни оценки, подготовка и управление на проекти 
              за безвъзмездно финансиране и посредничество при недвижими имоти
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Link to="/services">
                  Нашите услуги
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link to="/contact">
                  Свържете се с нас
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Нашите услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Предлагаме широк спектър от професионални консултантски услуги
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <img src={service.icon} alt={service.title} className="w-12 h-12" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <Button asChild variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Link to={service.link}>
                      Научете повече
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                За нас
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                „Хемус Консулт" е консултантска компания, специализирана в изготвяне на експертни пазарни оценки, 
                подготовка и управление на проекти за безвъзмездно финансиране от национални, европейски и други фондове 
                и посредничество при покупко-продажба на недвижими имоти.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Дружеството е наследник на "Консултантска къща Хемус", създадена през 1992г.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Сертифицирана за оценка на недвижими имоти</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Експертиза в европейски проекти</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Над 30 години опит в сферата</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={aboutTeam} 
                alt="Нашият екип" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Последни новини
            </h2>
            <p className="text-lg text-gray-600">
              Следете най-новите възможности за финансиране и актуални новини
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentNews.map((news, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{news.date}</span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {news.excerpt}
                  </CardDescription>
                  <Button asChild variant="outline">
                    <Link to="/news">
                      Прочетете повече
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link to="/news">
                Всички новини
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готови сте да започнете?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свържете се с нас днес за безплатна консултация и разберете как можем да ви помогнем
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link to="/contact">
              Свържете се с нас
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home

