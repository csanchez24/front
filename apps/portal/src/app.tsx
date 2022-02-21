import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/base/layout';
import { PrivateRoute } from './components/base/private-route';
import { Home } from './pages/home';
import { Login } from './pages/login';

export function App() {
  return (
    <Routes>
      <Route
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
