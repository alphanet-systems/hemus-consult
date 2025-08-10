import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Euro, Building, FileText, Users, Award, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import servicesConsulting from '../assets/services_consulting.png'
import servicesEvaluation from '../assets/services_evaluation.png'
import servicesRealEstate from '../assets/services_realestate.png'
import euProjectsIcon from '../assets/eu_projects_icon.png'

const Services = () => {
  const mainServices = [
    {
      title: 'Европроекти',
      description: 'Подготовка и управление на проекти финансирани от национални и европейски фондове',
      icon: euProjectsIcon,
      features: [
        'Подготовка на проектни предложения',
        'Управление на проекти',
        'Отчитане и мониторинг',
        'Консултации за финансиране'
      ],
      details: 'Нашият екип има богат опит в подготовката и управлението на проекти, финансирани от различни европейски и национални програми. Предлагаме пълен цикъл от услуги - от идеята до успешното приключване на проекта.'
    },
    {
      title: 'Експертни пазарни оценки',
      description: 'Изготвяне на експертни пазарни оценки на различни видове активи',
      icon: servicesEvaluation,
      features: [
        'Оценка на недвижими имоти',
        'Оценка на машини и съоръжения',
        'Оценка на търговски предприятия',
        'Оценка на земеделски земи'
      ],
      details: 'Фирмата е сертифицирана за оценка на недвижими имоти, машини и съоръжения, търговски предприятия и вземания, земеделски земи и трайни насаждения, права на интелектуалната и индустриалната собственост и други активи.'
    },
    {
      title: 'Недвижими имоти',
      description: 'Консултации и посредничество при търговия с недвижими имоти',
      icon: servicesRealEstate,
      features: [
        'Консултации при покупко-продажба',
        'Пазарен анализ',
        'Правни консултации',
        'Посредничество при сделки'
      ],
      details: '"Хемус Консулт" предоставя на своите клиенти професионални консултации и посредничество при търговия с недвижими имоти, осигурявайки пълна подкрепа през целия процес.'
    }
  ]

  const certifications = [
    {
      title: 'Сертификация за оценки',
      description: 'Сертифицирани оценители съгласно българското законодателство',
      icon: Award
    },
    {
      title: 'Европейски стандарти',
      description: 'Работим по международни стандарти за оценка и управление на проекти',
      icon: Target
    },
    {
      title: 'Професионален опит',
      description: 'Над 30 години опит в консултантската дейност',
      icon: Users
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Консултация',
      description: 'Безплатна първоначална консултация за определяне на вашите нужди'
    },
    {
      step: '02',
      title: 'Анализ',
      description: 'Детайлен анализ на проекта и изготвяне на план за действие'
    },
    {
      step: '03',
      title: 'Изпълнение',
      description: 'Професионално изпълнение на услугата с редовни отчети'
    },
    {
      step: '04',
      title: 'Резултат',
      description: 'Предаване на финалните документи и последваща поддръжка'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Нашите услуги
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Предлагаме широк спектър от професионални консултантски услуги, 
              адаптирани към специфичните нужди на всеки клиент
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <img src={service.icon} alt={service.title} className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {service.details}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild size="lg">
                    <Link to="/contact">
                      Заявете консултация
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="p-6">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">
                        {service.title}
                      </CardTitle>
                      <CardDescription>
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Как работим
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Нашият процес е структуриран и прозрачен, осигурявайки най-добрите резултати за клиентите
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {step.description}
                  </CardDescription>
                </CardContent>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Сертификации и стандарти
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Работим по най-високите професионални стандарти
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <cert.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {cert.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Нужна ви е професионална консултация?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свържете се с нас за безплатна първоначална консултация и разберете как можем да ви помогнем
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">
                Свържете се с нас
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/news">
                Последни възможности
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

