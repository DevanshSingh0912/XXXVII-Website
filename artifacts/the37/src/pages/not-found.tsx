import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center p-8 selection:bg-white selection:text-black">
      <div className="text-[10rem] font-sans font-light leading-none mb-8 tracking-tighter text-white/20">404</div>
      <h1 className="text-2xl font-mono uppercase tracking-widest text-muted-foreground mb-8">
        Void Detected
      </h1>
      <Link href="/" className="group flex items-center gap-4 text-sm font-sans uppercase tracking-widest hover:text-white text-white/60 transition-colors">
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" />
        Return to the Atlas
      </Link>
    </div>
  );
}