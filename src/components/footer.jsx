import React from "react";

export default function Footer(){
    return(
            <footer className="bg-white pt-16 pb-8 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto grid md:grid-cols-4 gap-8 text-gray-600">
            <div>
                 <a href="#" className="flex items-center space-x-2 mb-4">
                     <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl">G</div>
                     <span className="font-bold text-lg text-gray-800">Global Dreams</span>
                </a>
                <p className="text-sm">Empowering students to reach their highest potential and achieve their academic dreams.</p>
            </div>
            <div>
                <h6 className="font-bold text-gray-800 mb-4">Information</h6>
                <ul className="space-y-2 text-sm">
                    <li><a href="#features" className="hover:text-brand-blue">About Us</a></li>
                    <li><a href="#features" className="hover:text-brand-blue">Services</a></li>
                    <li><a href="#testimonials" className="hover:text-brand-blue">Testimonials</a></li>
                    <li><a href="#blog" className="hover:text-brand-blue">Blog</a></li>
                </ul>
            </div>
            <div>
                <h6 className="font-bold text-gray-800 mb-4">Company</h6>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-brand-blue">Careers</a></li>
                    <li><a href="#" className="hover:text-brand-blue">Press</a></li>
                    <li><a href="#" className="hover:text-brand-blue">Partnerships</a></li>
                    <li><a href="#" className="hover:text-brand-blue">Privacy Policy</a></li>
                </ul>
            </div>
            <div>
                <h6 className="font-bold text-gray-800 mb-4">Contact</h6>
                <ul className="space-y-2 text-sm">
                    <li><a href="mailto:contact@globaldreams.com" className="hover:text-brand-blue">contact@globaldreams.com</a></li>
                    <li><a href="tel:+15551234567" className="hover:text-brand-blue">+1 (555) 123-4567</a></li>
                </ul>
                <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-gray-400 hover:text-brand-blue"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg></a>
                    <a href="#" className="text-gray-400 hover:text-brand-blue"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
                    <a href="#" className="text-gray-400 hover:text-brand-blue"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM8.21 10.891V16H6.152v-5.109H8.21zm-.92-2.034a1.12 1.12 0 110-2.24 1.12 1.12 0 010 2.24zM16 16h-2.066v-2.633c0-.629-.012-1.437-.875-1.437-.875 0-1.01.684-1.01 1.391V16h-2.067v-5.109h1.983v.91h.027c.277-.525.954-1.073 1.956-1.073 2.093 0 2.48 1.378 2.48 3.168V16z" clip-rule="evenodd" /></svg></a>
                </div>
            </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>&copy; 2025 Global Dreams Connect. All Rights Reserved.</p>
        </div>
    </footer>
    )
}