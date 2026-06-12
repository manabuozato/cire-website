import { Router, Switch, Route } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Top } from "@/pages/Top";
import { About } from "@/pages/About";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";
import { News } from "@/pages/News";
import NotFound from "@/pages/not-found";

export default function App() {
  return (
    <LanguageProvider>
      <Router hook={useHashLocation}>
        <Switch>
          <Route path="/" component={Top} />
          <Route path="/about" component={About} />
          <Route path="/legal" component={PrivacyPolicy} />
          <Route path="/news" component={News} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </LanguageProvider>
  );
}
