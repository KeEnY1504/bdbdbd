import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/pageHome/HomePage';
import AttractionsPage from './pages/AttractionsPage/AttractionsPage';
import AttractionDetailPage from './pages/AttractionDetailes/AttractionDetailPage';
import HeaderTop from './components/header/header';


// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <HeaderTop />
//         <Route path="/" element={<HomePage />} />
//         <Route path="/attractions/:id" element={<AttractionDetailPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Router



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/attractions',
    element: <AttractionsPage />,
  },
  {
    path: '/attractions/:id',
    element: <AttractionDetailPage />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}


















//3
// export const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           {/* Вложенные маршруты */}
//           <Route index element={<HomePage />} /> {/* Главная страница */}
//           <Route path="attractions" element={<AttractionsPage />} /> {/* Страница достопримечательностей */}
//           <Route path="attractions/:id" element={<AttractionDetailPage />} /> {/* Детали достопримечательности */}
//           <Route path="contacts" element={<ContactsPage />} /> {/* Страница контактов */}
//         </Route>

//         {/* Маршрут для 404 (если страница не найдена) */}
//         <Route path="*" element={<div>404 - Страница не найдена</div>} />
//       </Routes>
//     </BrowserRouter>
//   );
// };
