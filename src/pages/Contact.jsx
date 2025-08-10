import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Адрес',
      details: ['гр. Троян', 'ул. "Ген. Карцов" № 10'],
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Телефон',
      details: ['0882 058 000'],
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Имейл',
      details: ['hemus.consult@abv.bg'],
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Работно време',
      details: ['Понеделник - Петък', '09:00 - 17:00'],
      color: 'text-orange-600'
    }
  ]

  const services = [
    'Европроекти и финансиране',
    'Експертни пазарни оценки',
    'Недвижими имоти',
    'Консултации',
    'Друго'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Свържете се с нас
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Готови сме да отговорим на вашите въпроси и да ви предоставим професионална консултация
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className={`mx-auto mb-4 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center`}>
                    <info.icon className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-gray-600">
                      {detail}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Изпратете ни съобщение
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Попълнете формата по-долу и ние ще се свържем с вас възможно най-скоро.
              </p>

              {isSubmitted ? (
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3 text-green-700">
                      <CheckCircle className="h-6 w-6" />
                      <div>
                        <h3 className="font-semibold">Съобщението е изпратено успешно!</h3>
                        <p className="text-sm">Ще се свържем с вас възможно най-скоро.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Име *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Вашето име"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Имейл *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="0888 123 456"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Тема</Label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="">Изберете тема</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Съобщение *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Опишете как можем да ви помогнем..."
                      rows={6}
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Изпрати съобщение
                  </Button>
                </form>
              )}
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Къде се намираме
              </h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Карта на локацията</p>
                  <p className="text-sm">гр. Троян, ул. "Ген. Карцов" № 10</p>
                </div>
              </div>

              {/* Additional Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Допълнителна информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Паркиране</h4>
                    <p className="text-gray-600 text-sm">
                      Налично е безплатно паркиране пред офиса.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Обществен транспорт</h4>
                    <p className="text-gray-600 text-sm">
                      Офисът се намира в центъра на града, лесно достъпен с обществен транспорт.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Консултации</h4>
                    <p className="text-gray-600 text-sm">
                      Препоръчваме предварително записване за консултации.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Често задавани въпроси
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Отговори на най-често задаваните въпроси от клиентите ни
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Колко време отнема една оценка?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Времето за изготвяне на оценка зависи от сложността на обекта, но обикновено е между 3-7 работни дни.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Предлагате ли безплатни консултации?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Да, предлагаме безплатна първоначална консултация за всички наши услуги.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">В кои региони работите?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Работим в цяла България, с основен фокус върху Северна и Централна България.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Как мога да проследя статуса на моя проект?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Редовно информираме клиентите за напредъка чрез телефон и имейл. Можете да се свържете с нас по всяко време.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Спешни консултации
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            При спешни случаи можете да се свържете с нас директно по телефона
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-3 text-2xl font-bold">
              <Phone className="h-8 w-8" />
              <span>0882 058 000</span>
            </div>
            <div className="text-lg opacity-90">
              Понеделник - Петък: 09:00 - 17:00
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

