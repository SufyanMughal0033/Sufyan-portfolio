import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import GradientBlobs from '../components/GradientBlobs.jsx';
import Reveal from '../components/Reveal.jsx';

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
        <GradientBlobs />
        <div className="container-app relative text-center">
          <Reveal>
            <p className="font-display text-8xl font-bold gradient-text sm:text-9xl">404</p>
            <h1 className="mt-4 font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              This page took a wrong turn
            </h1>
            <p className="mx-auto mt-3 max-w-md text-slate-500 dark:text-slate-400">
              The page you're looking for doesn't exist or may have moved.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/" className="btn-primary">
                <Home size={18} /> Back to Home
              </Link>
              <Link to="/contact" className="btn-outline">
                <ArrowLeft size={18} /> Contact Support
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
