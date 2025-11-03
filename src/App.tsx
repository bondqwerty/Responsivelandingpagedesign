import { Phone, Clock, Users, TrendingUp, CheckCircle, Shield, Zap, PhoneCall, RefreshCw, FileText, Target, BarChart3, Calendar, MessageSquare } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { LeadCaptureForm } from './components/LeadCaptureForm';
import { Toaster } from './components/ui/sonner';
import logo from 'figma:asset/3fb14a741aef8b29011aee3cd70f4b979ded5455.png';
import howItWorksImage from 'figma:asset/1d5608c0808e6d1beb9a5f7f19b71bd00247fc05.png';

export default function App() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center">
              <img src={logo} alt="InsurVoices" className="h-8 lg:h-10" />
            </div>
            
            <Button
              onClick={scrollToForm}
              className="bg-[#ffde22] hover:bg-[#ffe44d] text-black transition-all duration-300 hover:scale-105"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden mt-16 lg:mt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-[#ffde22] text-black px-4 py-2 rounded-full">
                  AI-Powered Insurance Automation
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl">
                Convert<br />
                Every Ring<br />
                <span className="text-[#ffde22]">Into Revenue</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                InsurVoices automates phone calls for insurance agencies — from quote intake to FNOL, renewals to churn recovery. Available 24/7, so your team can focus on closing deals.
              </p>
              
              <div>
                <Button
                  onClick={scrollToForm}
                  className="bg-[#ffde22] hover:bg-[#ffe44d] text-black px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Book a Demo
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-8 pt-4 justify-center">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#ffde22]" />
                  <span className="text-sm">24/7 Availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#ffde22]" />
                  <span className="text-sm">Instant Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#ffde22]" />
                  <span className="text-sm">Zero Missed Calls</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Pain Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">
              Your Agency Is Losing Revenue From Unanswered Calls And Missed Follow-Ups
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Every unanswered call is a lost opportunity. Here's what it's costing you:
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 space-y-4 border-2 hover:border-slate-300 transition-all duration-300">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3>After-Hours Calls</h3>
              <p className="text-slate-600">
                40% of calls come in outside business hours — going straight to voicemail
              </p>
            </Card>
            
            <Card className="p-6 space-y-4 border-2 hover:border-slate-300 transition-all duration-300">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3>Slow Response Times</h3>
              <p className="text-slate-600">
                Customers expect instant answers, but your team is already swamped
              </p>
            </Card>
            
            <Card className="p-6 space-y-4 border-2 hover:border-slate-300 transition-all duration-300">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3>Lost Follow-Ups</h3>
              <p className="text-slate-600">
                Old leads and renewals slip through the cracks without consistent outreach
              </p>
            </Card>
            
            <Card className="p-6 space-y-4 border-2 hover:border-slate-300 transition-all duration-300">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3>Churn Risk</h3>
              <p className="text-slate-600">
                Customers leave when they can't reach you during policy changes or claims
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution/Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">
              One AI Voice Agent. Unlimited Capabilities.
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              InsurVoices handles every type of insurance call, automatically — so you never lose a lead or customer again.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#ffde22] rounded-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-slate-900" />
              </div>
              <h3>Quote Intake</h3>
              <p className="text-slate-600 leading-relaxed">
                Capture new quote requests instantly, collect key details, and route to the right agent
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#ffde22] rounded-xl flex items-center justify-center">
                <RefreshCw className="w-8 h-8 text-slate-900" />
              </div>
              <h3>Policy Renewals</h3>
              <p className="text-slate-600 leading-relaxed">
                Proactively call customers before policy expiration with renewal options
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#ffde22] rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-slate-900" />
              </div>
              <h3>FNOL (First Notice of Loss)</h3>
              <p className="text-slate-600 leading-relaxed">
                Handle claims intake 24/7, gather incident details, and start the process immediately
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#ffde22] rounded-xl flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-slate-900" />
              </div>
              <h3>Endorsements</h3>
              <p className="text-slate-600 leading-relaxed">
                Process policy changes and updates without waiting for office hours
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#ffde22] rounded-xl flex items-center justify-center">
                <Users className="w-8 h-8 text-slate-900" />
              </div>
              <h3>Lead Follow-Up</h3>
              <p className="text-slate-600 leading-relaxed">
                Automatically re-contact old leads and nurture new ones with consistent outreach
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#ffde22] rounded-xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-slate-900" />
              </div>
              <h3>Churn Recovery</h3>
              <p className="text-slate-600 leading-relaxed">
                Win back lost customers with timely, personalized outreach campaigns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">
              Set Up in Minutes. See Results in Days.
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Getting started with InsurVoices is simple — no technical expertise required.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#ffde22] text-black rounded-full flex items-center justify-center">
                    1
                  </div>
                </div>
                <div className="space-y-2">
                  <h3>Configure Your Voice Agent</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Tell us about your agency's services, processes, and call handling preferences. We customize the AI to sound like your team.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#ffde22] text-black rounded-full flex items-center justify-center">
                    2
                  </div>
                </div>
                <div className="space-y-2">
                  <h3>Connect Your Systems</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Integrate with your existing CRM, AMS, and phone system. InsurVoices works seamlessly with your workflow.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#ffde22] text-black rounded-full flex items-center justify-center">
                    3
                  </div>
                </div>
                <div className="space-y-2">
                  <h3>Go Live & Scale</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Start with one use case and expand. Handle thousands of calls simultaneously without hiring more staff.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={howItWorksImage}
                  alt="InsurVoices AI Technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results/Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">
              The Numbers Don't Lie
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              See the impact InsurVoices has on agencies just like yours.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl text-[#ffde22]">95%</div>
              <div className="text-slate-600">Call Answer Rate</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl text-[#ffde22]">3x</div>
              <div className="text-slate-600">More Leads Converted</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl text-[#ffde22]">40%</div>
              <div className="text-slate-600">Reduction in Churn</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl text-[#ffde22]">24/7</div>
              <div className="text-slate-600">Customer Support</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 bg-slate-50 border-0">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3>Instant Response</h3>
              <p className="text-slate-600 leading-relaxed">
                Answer every call in seconds, not hours. No more waiting, no more voicemail.
              </p>
            </Card>
            
            <Card className="p-8 space-y-4 bg-slate-50 border-0">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3>Actionable Insights</h3>
              <p className="text-slate-600 leading-relaxed">
                Track call metrics, conversion rates, and customer sentiment in real-time.
              </p>
            </Card>
            
            <Card className="p-8 space-y-4 bg-slate-50 border-0">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <h3>Focus on Revenue</h3>
              <p className="text-slate-600 leading-relaxed">
                Let AI handle routine calls while your team focuses on complex sales and relationships.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA & Lead Capture Form Section */}
      <section id="contact-form" className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl">
                Ready to Transform Your Agency?
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                Book a personalized demo and see how InsurVoices can help you capture more leads, reduce churn, and grow your business.
              </p>
            </div>
            
            <Card className="p-8 lg:p-12 bg-white text-slate-900">
              <LeadCaptureForm />
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-slate-900 py-12 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <img src={logo} alt="InsurVoices" className="h-8" />
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                AI-powered phone automation for insurance agencies and brokers.
              </p>
            </div>
            
            <div>
              <h4 className="mb-4 text-slate-900">Product</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><a href="#" className="hover:text-slate-900 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 text-slate-900">Resources</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><a href="#" className="hover:text-slate-900 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 text-slate-900">Company</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><a href="#" className="hover:text-slate-900 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-8 text-center text-slate-600 text-sm">
            <p>&copy; 2025 InsurVoices. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
