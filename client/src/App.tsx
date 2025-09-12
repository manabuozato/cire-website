import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { LanguageProvider } from "@/contexts/LanguageContext";

import { Top } from "@/pages/Top";
import { About } from "@/pages/About";
import { News } from "@/pages/News";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        {/* Add pages below */}
        <Route path="/" component={Top} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
        <Route path="/legal" component={PrivacyPolicy} />
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <AppRouter />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
