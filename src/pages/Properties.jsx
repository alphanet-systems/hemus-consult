import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, Filter, MapPin, Home, Building, Warehouse, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [propertyType, setPropertyType] = useState('all')
  const [priceRange, setPriceRange] = useState('all')

  const propertyTypes = [
    { value: 'all', label: 'Всички типове' },
    { value: 'apartment', label: 'Апартаменти' },
    { value: 'house', label: 'Къщи' },
    { value: 'commercial', label: 'Търговски' },
    { value: 'industrial', label: 'Промишлени' },
    { value: 'land', label: 'Земи' }
  ]

  const priceRanges = [
    { value: 'all', label: 'Всички цени' },
    { value: '0-50000', label: 'До 50,000 лв' },
    { value: '50000-100000', label: '50,000 - 100,000 лв' },
    { value: '100000-200000', label: '100,000 - 200,000 лв' },
    { value: '200000+', label: 'Над 200,000 лв' }
  ]

  const services = [
    {
      title: 'Консултации при покупко-продажба',
      description: 'Професионални консултации за всички етапи от процеса на покупко-продажба на недвижими имоти',
      icon: Home,
      features: [
        'Правни консултации',
        'Пазарен анализ',
        'Оценка на имота',
        'Подготовка на документи'
      ]
    },
    {
      title: 'Пазарни анализи',
      description: 'Детайлни анализи на пазара на недвижими имоти в различни региони',
      icon: Building,
      features: [
        'Анализ на цените',
        'Тенденции на пазара',
        'Инвестиционни възможности',
        'Прогнози за развитие'
      ]
    },
    {
      title: 'Посредничество при сделки',
      description: 'Пълно посредничество и подкрепа през целия процес на сделката',
      icon: Warehouse,
      features: [
        'Търсене на купувачи/продавачи',
        'Договаряне на условия',
        'Правно обслужване',
        'Завършване на сделката'
      ]
    }
  ]

  const testimonials = [
    {
      name: 'Иван Петров',
      location: 'Троян',
      text: 'Благодаря на екипа на Хемус Консулт за професионалната помощ при продажбата на моя имот. Всичко премина гладко и бързо.',
      rating: 5
    },
    {
      name: 'Мария Георгиева',
      location: 'Ловеч',
      text: 'Отличен сервис и много професионален подход. Препоръчвам ги за всички, които търсят качествени услуги.',
      rating: 5
    },
    {
      name: 'Стоян Димитров',
      location: 'Плевен',
      text: 'Много съм доволен от консултацията и помощта при покупката на новия ми дом. Благодаря!',
      rating: 5
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Първоначална консултация',
      description: 'Безплатна консултация за определяне на вашите нужди и цели'
    },
    {
      step: '02',
      title: 'Пазарен анализ',
      description: 'Детайлен анализ на пазара и оценка на имота'
    },
    {
      step: '03',
      title: 'Търсене и подбор',
      description: 'Активно търсене на подходящи варианти или купувачи'
    },
    {
      step: '04',
      title: 'Договаряне и сделка',
      description: 'Професионално договаряне и завършване на сделката'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Недвижими имоти
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Професионални консултации и посредничество при търговия с недвижими имоти
            </p>
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <Link to="/contact">
                Свържете се с нас
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Търсите имот или искате да продадете?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Търсене по локация..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger>
                  <SelectValue placeholder="Тип имот" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Ценови диапазон" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button className="w-full">
                <Search className="mr-2 h-4 w-4" />
                Търси
              </Button>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">
                Не намирате това, което търсите? Свържете се с нас за персонализирана помощ.
              </p>
              <Button asChild variant="outline">
                <Link to="/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Свържете се с нас
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Нашите услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Предлагаме пълен спектър от услуги в областта на недвижимите имоти
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 text-center">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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
              Нашият процес е структуриран и прозрачен, осигурявайки най-добрите резултати
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
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

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Какво казват клиентите ни
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Доволството на клиентите е нашият приоритет
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </CardTitle>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{testimonial.location}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 italic">
                    "{testimonial.text}"
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
            Готови сте за следващата стъпка?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свържете се с нас за безплатна консултация и разберете как можем да ви помогнем с вашия имот
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">
                Свържете се с нас
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/services">
                Нашите услуги
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Properties

