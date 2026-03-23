const Footer = () => {
  return (
    <footer className="mt-16 bg-[#001931] px-4 pb-6 pt-10 text-white md:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 border-b border-white/10 pb-6 md:flex-row">
        <div>
          <h3 className="text-xl font-bold">HERO.IO</h3>
          <p className="mt-2 max-w-md text-sm text-white/75">
            Productive apps to help you focus, plan smarter, and ship more every day.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-medium">Social Links</h4>
          <div className="mt-3 flex gap-3 text-sm text-white/80">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              X
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-5 w-full max-w-7xl text-center text-xs text-white/70">
        Copyright © 2025 - All right reserved
      </p>
    </footer>
  );
};

export default Footer;
