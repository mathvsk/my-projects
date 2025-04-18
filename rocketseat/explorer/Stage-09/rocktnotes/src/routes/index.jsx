import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes(){
  const { user } = useAuth();

    return (
    <BrowserRouter>
    {/* Validaçao se o user esta logado ou não */}
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
    );
}