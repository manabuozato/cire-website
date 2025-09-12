import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Top } from "@/pages/Top";
import { About } from "@/pages/About";
import { Legal } from "@/pages/Legal";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={Top} />
      <Route path="/about" component={About} />
      <Route path="/legal" component={Legal} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
