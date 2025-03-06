import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Inventry from './screens/Inventry.jsx';
import ApplyForCredit from './screens/ApplyForCredit.jsx';
import CarFinder from './screens/CarFinder.jsx';
import Appointment from './screens/Appointment.jsx';
import DealerShip from './screens/DealerShip.jsx';
import Finance from './screens/Finance.jsx';
import ImageGallery from './screens/ImageGallery.jsx';
import MyTrade from './screens/MyTrade.jsx';
import Order from './screens/Order.jsx';
import VideoGallery from './screens/VideoGallery.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './screens/Home.jsx';
import ContactUs from './screens/ContactUs.jsx';
import Direction from './screens/Direction.jsx';
import JeepWrangular from './screens/JeepWrangular.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'Inventory',
        element: <Inventry />,
      },
      {
        path: 'CarFinder',
        element: <CarFinder />,
      },
      {
        path: 'JeepWrangular',
        element: <JeepWrangular />,
      },
      {
        path: 'ApplyForCredit',
        element: <ApplyForCredit />,
      },
      {
        path: 'Appointment',
        element: <Appointment />,
      },
      {
        path: 'DealerShip',
        element: <DealerShip />,
      },
      {
        path: 'Finance',
        element: <Finance />,
      },
      {
        path: 'ImageGallery',
        element: <ImageGallery />,
      },
      {
        path: 'MyTrade',
        element: <MyTrade />,
      },
      {
        path: 'Order',
        element: <Order />,
      },
      {
        path: 'VideoGallery',
        element: <VideoGallery />,
      },
      {
        path: 'Contact',
        element: <ContactUs />,
      },  
      {
        path: 'Direction',
        element: <Direction />,
      },
      {
        path: '*',
        element: <h1>404 Not Found</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
