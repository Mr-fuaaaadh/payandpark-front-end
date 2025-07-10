import React from 'react';
import { Car, Clock, CreditCard, MapPin, Shield, Star, ChevronRight, Play, CheckCircle, Lock, Eye, Smartphone, Zap, Users, Award, DollarSign, Download } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="relative animate-pulse">
                <Car className="h-10 w-10 text-blue-600 transition-transform hover:scale-110 duration-300" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                  <DollarSign className="h-2.5 w-2.5 text-white" />
                </div>
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">ParkFlow</span>
              <span className="ml-2 text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium animate-fade-in">Premium</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105">Features</a>
              <a href="#rates" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105">Rates</a>
              <a href="#security" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105">Security</a>
              <a href="#download" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105">Download</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105">Sign In</button>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold shadow-sm hover:shadow-lg hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center mb-6 animate-slide-in-left">
                <Award className="h-6 w-6 text-yellow-400 mr-2 animate-bounce" />
                <span className="text-yellow-400 font-semibold">Premium Parking Solution</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up delay-200">
                Smart Parking,
                <span className="text-blue-300 animate-pulse"> Seamless Payments</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed animate-fade-in-up delay-300">
                Transform your parking experience with our premium payment platform. 
                Find, reserve, and pay for parking instantly with enterprise-grade security and competitive hourly rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up delay-400">
                <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105">
                  Start Free Trial
                  <ChevronRight className="ml-2 h-5 w-5 animate-bounce-x" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center hover:scale-105">
                  <Play className="mr-2 h-5 w-5 animate-pulse" />
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center space-x-6 text-blue-200 animate-fade-in-up delay-500">
                <div className="flex items-center hover:scale-105 transition-transform duration-300">
                  <Users className="h-5 w-5 mr-2 animate-pulse" />
                  <span>50K+ Users</span>
                </div>
                <div className="flex items-center hover:scale-105 transition-transform duration-300">
                  <Star className="h-5 w-5 mr-2 text-yellow-400 animate-spin-slow" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Current Parking</h3>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium animate-pulse">Active</div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600 animate-bounce" />
                      <span>Downtown Plaza - Zone A</span>
                    </div>
                    <div className="flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-300">
                      <Clock className="h-4 w-4 mr-2 text-orange-600 animate-spin-slow" />
                      <span>2h 15m remaining</span>
                    </div>
                    <div className="flex items-center text-gray-600 hover:text-green-600 transition-colors duration-300">
                      <CreditCard className="h-4 w-4 mr-2 text-green-600 animate-pulse" />
                      <span>$12.50 total • $5.50/hr</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 mb-4 hover:bg-gray-100 transition-colors duration-300">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Vehicle</span>
                      <span className="font-medium text-gray-900">Tesla Model 3 • ABC-123</span>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105">
                    Extend Parking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect for Every Vehicle</h2>
            <p className="text-lg text-gray-600">From compact cars to luxury vehicles, we accommodate all types</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up delay-100">
              <img 
                src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Luxury sedan in premium parking spot"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-[-4px] transition-transform duration-300">
                <h3 className="text-lg font-semibold">Luxury Sedans</h3>
                <p className="text-sm text-gray-200">Premium spots available</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up delay-200">
              <img 
                src="https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="SUV in covered parking area"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-[-4px] transition-transform duration-300">
                <h3 className="text-lg font-semibold">SUVs & Trucks</h3>
                <p className="text-sm text-gray-200">Spacious parking zones</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up delay-300">
              <img 
                src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Electric car charging in parking spot"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white transform group-hover:translate-y-[-4px] transition-transform duration-300">
                <h3 className="text-lg font-semibold">Electric Vehicles</h3>
                <p className="text-sm text-gray-200">Charging stations included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hourly Rates Section */}
      <section id="rates" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Hourly Rates</h2>
            <p className="text-xl text-gray-600">Competitive pricing with no hidden fees</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up delay-100">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3 animate-bounce" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Downtown</h3>
                <div className="text-3xl font-bold text-blue-600 mb-1 animate-pulse">$6.50</div>
                <p className="text-gray-600 text-sm">per hour</p>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between hover:text-blue-600 transition-colors duration-300">
                    <span>Peak hours:</span>
                    <span className="font-medium">$8.00/hr</span>
                  </div>
                  <div className="flex justify-between hover:text-blue-600 transition-colors duration-300">
                    <span>Evening:</span>
                    <span className="font-medium">$4.50/hr</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up delay-200">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-green-600 mx-auto mb-3 animate-bounce" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business District</h3>
                <div className="text-3xl font-bold text-green-600 mb-1 animate-pulse">$5.25</div>
                <p className="text-gray-600 text-sm">per hour</p>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between hover:text-green-600 transition-colors duration-300">
                    <span>Peak hours:</span>
                    <span className="font-medium">$6.75/hr</span>
                  </div>
                  <div className="flex justify-between hover:text-green-600 transition-colors duration-300">
                    <span>Evening:</span>
                    <span className="font-medium">$3.50/hr</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up delay-300">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-3 animate-bounce" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Shopping Centers</h3>
                <div className="text-3xl font-bold text-purple-600 mb-1 animate-pulse">$3.75</div>
                <p className="text-gray-600 text-sm">per hour</p>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between hover:text-purple-600 transition-colors duration-300">
                    <span>Weekends:</span>
                    <span className="font-medium">$4.25/hr</span>
                  </div>
                  <div className="flex justify-between hover:text-purple-600 transition-colors duration-300">
                    <span>First 2hrs:</span>
                    <span className="font-medium text-green-600">Free</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up delay-400">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-orange-600 mx-auto mb-3 animate-bounce" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Airport</h3>
                <div className="text-3xl font-bold text-orange-600 mb-1 animate-pulse">$4.50</div>
                <p className="text-gray-600 text-sm">per hour</p>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between hover:text-orange-600 transition-colors duration-300">
                    <span>Daily max:</span>
                    <span className="font-medium">$35.00</span>
                  </div>
                  <div className="flex justify-between hover:text-orange-600 transition-colors duration-300">
                    <span>Weekly:</span>
                    <span className="font-medium">$180.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 animate-fade-in-up delay-500">
            <p className="text-gray-600 mb-4">Save up to 25% with our mobile app</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              View All Locations & Rates
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Security Section */}
      <section id="security" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <Shield className="h-16 w-16 text-blue-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl font-bold mb-4">Enterprise-Grade Security</h2>
            <p className="text-xl text-gray-300">Your safety and data protection are our top priorities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up delay-100">
              <Lock className="h-12 w-12 text-blue-400 mb-6 animate-bounce" />
              <h3 className="text-xl font-semibold mb-4">256-Bit Encryption</h3>
              <p className="text-gray-300">All payment data is protected with bank-level SSL encryption and secure tokenization.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-green-500 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up delay-200">
              <Eye className="h-12 w-12 text-green-400 mb-6 animate-pulse" />
              <h3 className="text-xl font-semibold mb-4">24/7 Monitoring</h3>
              <p className="text-gray-300">Advanced surveillance systems and real-time monitoring ensure your vehicle's safety.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-purple-500 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up delay-300">
              <Smartphone className="h-12 w-12 text-purple-400 mb-6 animate-spin-slow" />
              <h3 className="text-xl font-semibold mb-4">Biometric Access</h3>
              <p className="text-gray-300">Secure app access with fingerprint and face recognition technology.</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 animate-fade-in-up delay-400">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Security Certifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 animate-pulse" />
                    <span>PCI DSS Level 1 Compliant</span>
                  </div>
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 animate-pulse" />
                    <span>SOC 2 Type II Certified</span>
                  </div>
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 animate-pulse" />
                    <span>GDPR Compliant</span>
                  </div>
                  <div className="flex items-center hover:scale-105 transition-transform duration-300">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 animate-pulse" />
                    <span>ISO 27001 Certified</span>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <img 
                  src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Security monitoring dashboard"
                  className="rounded-lg shadow-lg mx-auto lg:mx-0 max-w-sm hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Features</h2>
            <p className="text-xl text-gray-600">Experience the future of parking with our cutting-edge technology</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105 animate-fade-in-up delay-100">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 hover:bg-blue-200 transition-colors duration-300">
                <MapPin className="h-8 w-8 text-blue-600 animate-bounce" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Availability</h3>
              <p className="text-gray-600">Find available parking spots instantly with our live availability tracking system and smart sensors.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105 animate-fade-in-up delay-200">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 hover:bg-green-200 transition-colors duration-300">
                <CreditCard className="h-8 w-8 text-green-600 animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contactless Payments</h3>
              <p className="text-gray-600">Secure, fast payments with multiple options including mobile wallets, cards, and cryptocurrency.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105 animate-fade-in-up delay-300">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 hover:bg-purple-200 transition-colors duration-300">
                <Zap className="h-8 w-8 text-purple-600 animate-spin-slow" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Instant Reservations</h3>
              <p className="text-gray-600">Reserve your spot in advance with instant confirmation and guaranteed availability.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105 animate-fade-in-up delay-400">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 hover:bg-orange-200 transition-colors duration-300">
                <Clock className="h-8 w-8 text-orange-600 animate-bounce" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Extensions</h3>
              <p className="text-gray-600">Extend your parking time remotely through the app without returning to your vehicle.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105 animate-fade-in-up delay-500">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 hover:bg-red-200 transition-colors duration-300">
                <Star className="h-8 w-8 text-red-600 animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Support</h3>
              <p className="text-gray-600">24/7 dedicated customer support with priority assistance for premium members.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105 animate-fade-in-up delay-600">
              <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 hover:bg-indigo-200 transition-colors duration-300">
                <Car className="h-8 w-8 text-indigo-600 animate-bounce" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Vehicle Management</h3>
              <p className="text-gray-600">Manage multiple vehicles and payment methods from a single premium account.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to premium parking</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up delay-100">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-blue-200 hover:scale-110 transition-all duration-300">
                <span className="text-2xl font-bold text-blue-600 animate-pulse">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Find & Reserve</h3>
              <p className="text-gray-600">Open the app, find available parking near your destination, and reserve your premium spot instantly with real-time pricing.</p>
            </div>
            <div className="text-center animate-fade-in-up delay-200">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-green-200 hover:scale-110 transition-all duration-300">
                <span className="text-2xl font-bold text-green-600 animate-pulse">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Park & Pay</h3>
              <p className="text-gray-600">Drive to your reserved spot and pay seamlessly through the app with your preferred secure payment method.</p>
            </div>
            <div className="text-center animate-fade-in-up delay-300">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-purple-200 hover:scale-110 transition-all duration-300">
                <span className="text-2xl font-bold text-purple-600 animate-pulse">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enjoy & Extend</h3>
              <p className="text-gray-600">Relax knowing your parking is secured with premium protection. Extend your time or end your session anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="flex items-center mb-6">
                <Download className="h-8 w-8 text-yellow-400 mr-3 animate-bounce" />
                <span className="text-yellow-400 font-semibold text-lg">Download Our App</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Get ParkFlow on
                <span className="text-blue-200"> Your Device</span>
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Download our premium mobile app and experience seamless parking management. 
                Available on all major platforms with exclusive mobile-only features and discounts.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center">
                    <div className="bg-white rounded-lg p-2 mr-3">
                      <Smartphone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Mobile Exclusive</h4>
                      <p className="text-sm text-blue-200">25% off first booking</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center">
                    <div className="bg-white rounded-lg p-2 mr-3">
                      <Zap className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Instant Notifications</h4>
                      <p className="text-sm text-blue-200">Real-time updates</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="group bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="mr-3">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>
                
                <a href="#" className="group bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="mr-3">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-center mb-6">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Car className="h-8 w-8 text-blue-600 animate-bounce" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">ParkFlow Mobile</h3>
                      <p className="text-sm text-gray-600">Premium Parking App</p>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                          <span className="text-sm text-gray-700">Find Parking</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <CreditCard className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm text-gray-700">Quick Payment</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-orange-600 mr-2" />
                          <span className="text-sm text-gray-700">Extend Time</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      </div>
                      <p className="text-xs text-gray-600">4.9/5 • 50K+ Downloads</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Ready to Experience Premium Parking?</h2>
          <p className="text-xl mb-8 animate-fade-in-up delay-100">Join thousands of satisfied customers who've made parking effortless and secure</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up delay-200">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>
          <div className="flex items-center justify-center space-x-8 text-blue-200 animate-fade-in-up delay-300">
            <div className="flex items-center hover:scale-105 transition-transform duration-300">
              <CheckCircle className="h-5 w-5 mr-2 animate-pulse" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center hover:scale-105 transition-transform duration-300">
              <CheckCircle className="h-5 w-5 mr-2 animate-pulse" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center hover:scale-105 transition-transform duration-300">
              <CheckCircle className="h-5 w-5 mr-2 animate-pulse" />
              <span>30-day guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="animate-fade-in-up">
              <div className="flex items-center mb-4">
                <div className="relative">
                  <Car className="h-8 w-8 text-blue-400 animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                    <DollarSign className="h-2.5 w-2.5 text-white" />
                  </div>
                </div>
                <span className="ml-3 text-2xl font-bold">ParkFlow</span>
                <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded-full">Premium</span>
              </div>
              <p className="text-gray-400">Making parking simple, secure, and smart for everyone with premium features and competitive rates.</p>
            </div>
            <div className="animate-fade-in-up delay-100">
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">Features</a></li>
                <li><a href="#rates" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">Hourly Rates</a></li>
                <li><a href="#security" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">Security</a></li>
                <li><a href="#download" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">Download App</a></li>
              </ul>
            </div>
            <div className="animate-fade-in-up delay-200">
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">Contact</a></li>
              </ul>
            </div>
            <div className="animate-fade-in-up delay-300">
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105">API Documentation</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 animate-fade-in-up delay-400">
            <p>&copy; 2025 ParkFlow Premium. All rights reserved. | Secure payments powered by enterprise-grade encryption.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounce-x {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(0);
          }
          40% {
            transform: translateX(-3px);
          }
          60% {
            transform: translateX(3px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }
        
        .animate-bounce-x {
          animation: bounce-x 2s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
}

export default App;