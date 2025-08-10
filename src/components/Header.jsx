import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Начало', href: '/' },
    { name: 'Услуги', href: '/services' },
    { name: 'Имоти', href: '/properties' },
    { name: 'Новини', href: '/news' },
    { name: 'Контакти', href: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>0882 058 000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hemus.consult@abv.bg</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Понеделник - Петък: 09:00 - 17:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                ХК
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">ХЕМУС КОНСУЛТ</div>
                <div className="text-sm text-gray-600">Експертни консултантски услуги</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

