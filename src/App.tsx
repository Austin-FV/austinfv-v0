import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-5xl px-4 pb-16 pt-8 md:px-6 md:pb-20 md:pt-12">
        <Hero />
        <hr className="border-border/40" />
        <About />
        <hr className="border-border/40" />
        <Experience />
        <hr className="border-border/40" />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
