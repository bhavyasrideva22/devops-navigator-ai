import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Introduction from "./pages/assessment/Introduction";
import Psychometric from "./pages/assessment/Psychometric";
import Technical from "./pages/assessment/Technical";
import WISCAR from "./pages/assessment/WISCAR";
import Recommendations from "./pages/assessment/Recommendations";
import Guidance from "./pages/assessment/Guidance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/assessment/introduction" element={<Introduction />} />
          <Route path="/assessment/psychometric" element={<Psychometric />} />
          <Route path="/assessment/technical" element={<Technical />} />
          <Route path="/assessment/wiscar" element={<WISCAR />} />
          <Route path="/assessment/recommendations" element={<Recommendations />} />
          <Route path="/assessment/guidance" element={<Guidance />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
