import Image from "next/image";

export default function Footer() {
  return (
    <footer className="glass cosmic-bg pt-2 mt-auto">
      <div className="container text-center d-flex justify-content-between">
        <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
          <div className="logo">
            <Image
              className="rounded-circle"
              src="/logo-dark-2.png"
              alt="Next.js logo"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className="brandname">
            <span className="fw-bold">Dotflex</span>
            <span className="fw-normal">.UI</span>
          </div>
        </div>
        <p className="text-secondary mb-0 pt-2">© {new Date().getFullYear()} DOTFLEX — Brands launched from deep space.</p>
      </div>
    </footer>
  );
}