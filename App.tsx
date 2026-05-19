import { Routes, Route, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tools from './pages/Tools';
import News from './pages/News';
import Glossary from './pages/Glossary';
import About from './pages/About';
import Article from './pages/Article';
import Coach from './pages/Coach';
import CoachPrompt from './pages/CoachPrompt';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Layout>
        <Outlet />
      </Layout>
    </HelmetProvider>
  );
};

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "tools", element: <Tools /> },
      { path: "news", element: <News /> },
      { path: "news/:year/:month/:slug", element: <Article /> },
      { path: "glossary", element: <Glossary /> },
      { path: "about", element: <About /> },
      { path: "coach", element: <Coach /> },
      { path: "coach/prompt", element: <CoachPrompt /> },
    ]
  },
];

export default App;
