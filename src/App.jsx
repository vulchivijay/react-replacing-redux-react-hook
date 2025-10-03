import { RouterProvider } from 'react-router-dom';
import AppRouter from './Routers/Routers.jsx';

function App() {
  return (
    <RouterProvider router={AppRouter} />
  )
}

export default App;
