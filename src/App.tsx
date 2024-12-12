import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<h1>App</h1>} />
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
