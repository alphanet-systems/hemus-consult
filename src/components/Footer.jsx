import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                ХК
              </div>
              <div>
                <div className="text-xl font-bold">ХЕМУС КОНСУЛТ</div>
                <div className="text-gray-400 text-sm">Експертни консултантски услуги</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              „Хемус Консулт" е консултантска компания, специализирана в изготвяне на експертни пазарни оценки, 
              подготовка и управление на проекти за безвъзмездно финансиране от национални, европейски и други фондове 
              и посредничество при покупко-продажба на недвижими имоти.
            </p>
            <div className="text-sm text-gray-400">
              Дружеството е наследник на "Консултантска къща Хемус", създадена през 1992г.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Бързи връзки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Начало
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-white transition-colors">
                  Имоти
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white transition-colors">
                  Новини
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакти</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>гр. Троян</div>
                  <div>ул. "Ген. Карцов" № 10</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">0882 058 000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">hemus.consult@abv.bg</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>Понеделник - Петък</div>
                  <div>09:00 - 17:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 Хемус Консулт. Всички права запазени.
            </div>
            <div className="text-gray-400 text-sm mt-2 md:mt-0">
              Създадено с модерни технологии
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

