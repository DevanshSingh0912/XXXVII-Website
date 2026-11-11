import { type ReactNode, useLayoutEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Redirect, Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { Layout } from '@/components/layout';

import Home from '@/pages/home';
import Atlas from '@/pages/atlas';
import Story from '@/pages/story';
import CauseDetail from '@/pages/cause';
import Dimensions from '@/pages/dimensions';
import Infos from '@/pages/infos';
import Prelude from '@/pages/prelude';
import Contacts from '@/pages/contacts';
import About from '@/pages/about';

import { AnimatePresence, motion } from 'framer-motion';

const queryClient = new QueryClient();

function Router() {
  const [location] = useLocation();
  // Every navigation starts the new page at the top (hero), never at the
  // previous page's scroll position.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <RoutedErrorBoundary>
      <Layout>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div 
            key={location} 
            className="w-full"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Switch location={location}>
              <Route path="/" component={Home} />
              <Route path="/atlas" component={Story} />
              <Route path="/atlas/:dimensionId" component={Atlas} />
              <Route path="/causes" component={Atlas} />
              <Route path="/cause/:slug" component={CauseDetail} />
              <Route path="/dimensions" component={Dimensions} />
              <Route path="/infos" component={Infos} />
              <Route path="/prelude" component={Prelude} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/founder">{() => <Redirect to="/about" replace />}</Route>
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </motion.div>
        </AnimatePresence>
      </Layout>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
