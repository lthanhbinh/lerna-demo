import { MsalAuthenticationTemplate, MsalProvider } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';
import { msalInstance } from './configs/azure';
import AppRouter from './routes/AppRouters';
import './App.css';

export const App: React.FC = () => {
  return (
    <MsalProvider instance={msalInstance}>
      <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
        <AppRouter />
      </MsalAuthenticationTemplate>
    </MsalProvider>
  );
};
