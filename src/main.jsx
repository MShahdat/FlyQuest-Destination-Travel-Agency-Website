import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Pages/Home/Home';
import Consultations from './Pages/Consultations/Consultations';
import Abroad from './Pages/Abroad/Abroad';
import Australia from './Pages/Abroad/Australia';
import Canada from './Pages/Abroad/Canada';
import Europe from './Pages/Abroad/Europe';
import Malaysia from './Pages/Abroad/Malaysia';
import UK from './Pages/Abroad/UK';
import USA from './Pages/Abroad/USA';
import Services from './Pages/Servicess/Services';
import Tourist from './Pages/Servicess/Tourist';
import Hajj from './Pages/Servicess/Hajj';
import Air from './Pages/Servicess/Air';
import Couching from './Pages/Couching/Couching';
import IELTS from './Pages/Couching/IELTS';
import Duolingo from './Pages/Couching/Duolingo';
import Gallery from './Pages/Gallery/Gallery';
import Stories from './Pages/Gallery/Stories';
import Resources from './Pages/Resources/Resources';
import Blogs from './Pages/Resources/Blogs';
import Faq from './Pages/Resources/Faq';
import Visa from './Pages/Resources/Visa';
import Enroll from './Pages/Resources/Enroll';
import About from './Pages/About/About';
import Chairman from './Pages/About/Chairman';
import MD from './Pages/About/MD';
import Team from './Pages/About/Team';
import Contact from './Pages/Contact/Contact';
import Ceo from './Pages/About/Ceo';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/apply-now',
    element: <Consultations></Consultations>
  },
  {
    path: '/abroad',
    element: <Abroad></Abroad>
  },
  {
    path: '/australia',
    element: <Australia></Australia>
  },
  {
    path: '/canada',
    element: <Canada></Canada>
  },
  {
    path: '/europe',
    element: <Europe></Europe>
  },
  {
    path: '/malaysia',
    element: <Malaysia></Malaysia>
  },
  {
    path: "/uk",
    element: <UK></UK>
  },
  {
    path: '/usa',
    element: <USA></USA>
  },
  {
    path: '/services',
    element: <Services></Services>
  },
  {
    path: '/tourist',
    element: <Tourist></Tourist>
  },
  {
    path: '/hajj-umrah',
    element: <Hajj></Hajj>
  },
  {
    path: '/air-ticket',
    element: <Air></Air>
  },
  {
    path: '/english-couching',
    element: <Couching></Couching>
  },
  {
    path: '/ielts',
    element: <IELTS></IELTS>
  },
  {
    path: '/duolingo',
    element: <Duolingo></Duolingo>
  },
  {
    path: '/gallery',
    element: <Gallery></Gallery>
  },
  {
    path: '/success-stories',
    element: <Stories></Stories>
  },
  {
    path: '/resources',
    element: <Resources></Resources>
  },
  {
    path: '/blogs',
    element: <Blogs></Blogs>
  },
  {
    path: '/faq',
    element: <Faq></Faq>
  },
  {
    path: '/visa-interview',
    element: <Visa></Visa>
  },
  {
    path: '/how-to-enroll',
    element: <Enroll></Enroll>
  },
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: '/ceo',
    element: <Ceo></Ceo>
  },
  {
    path: '/chairman',
    element: <Chairman></Chairman>
  },
  {
    path: '/md',
    element: <MD></MD>
  },
  {
    path: '/our-team',
    element: <Team></Team>
  },
  {
    path: '/contact',
    element: <Contact></Contact>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
