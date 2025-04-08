import { footer } from "motion/react-m"

function Footer() {
  return (
    
     <footer className="w-full bg-black text-white py-8">
     <div className="container mx-auto px-3">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-4">
                 <h3 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">Company</h3>
                 <ul className="space-y-2">
                     <li>
                         <a href="/">
                             About Us
                         </a>
                     </li>
                     <li>
                         <a href="/">
                             Our Team
                         </a>
                     </li>
                     <li>
                         <a href="/" >
                             Careers
                         </a>
                     </li>
                     <li>
                         <a href="/" >
                             News
                         </a>
                     </li>
                 </ul>
                 {/* Next: "Add company logo at the top of this section" */}
             </div>

             <div className="space-y-4">
                 <h3 className="text-xl font-bold mb-4 border-b border-gray-800 pb-2">Services</h3>
                 <ul className="space-y-2">
                     <li>
                         <a
                             href="https://webcrumbs.cloud/placeholder"
                             className="hover:text-primary-300 transition-colors duration-200"
                         >
                             Web Development
                         </a>
                     </li>
                     <li>
                         <a
                             href="https://webcrumbs.cloud/placeholder"
                             className="hover:text-primary-300 transition-colors duration-200"
                         >
                             App Development
                         </a>
                     </li>
                     <li>
                         <a
                             href="https://webcrumbs.cloud/placeholder"
                             className="hover:text-primary-300 transition-colors duration-200"
                         >
                             UI/UX Design
                         </a>
                     </li>
                     <li>
                         <a
                             href="https://webcrumbs.cloud/placeholder"
                             className="hover:text-primary-300 transition-colors duration-200"
                         >
                             Consulting
                         </a>
                     </li>
                 </ul>
                 {/* Next: "Add service icons next to each service item" */}
             </div>
         </div>    
     </div>
 </footer>
  )
}

export default Footer
