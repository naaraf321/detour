import { whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="hairline-t relative overflow-hidden bg-ink px-6 pb-10 pt-24 md:px-10 md:pt-32">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="text-[13vw] font-semibold leading-[0.85] tracking-[-0.05em] md:text-[8.5vw]">
          LET'S CREATE
          <br />
          SOMETHING
          <br />
          <span className="text-outline">EXTRAORDINARY</span>
          <br />
          IN MALTA
        </h2>

        <div className="mt-24 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-4">
          <div>
            <div className="flex items-baseline gap-1 text-xl font-semibold">
              Detour<span className="text-accent">.</span>
            </div>
            <p className="mt-3 max-w-xs text-xs text-muted-foreground">
              Luxury real estate cinematography studio. Films, photography, drone.
            </p>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Menu
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#top" className="hover:text-accent">Home</a></li>
              <li><a href="#portfolio" className="hover:text-accent">Portfolio</a></li>
              <li><a href="#services" className="hover:text-accent">Services</a></li>
              <li><a href="#process" className="hover:text-accent">Process</a></li>
              <li><a href="#contact" className="hover:text-accent">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Elsewhere
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent">Instagram</a></li>
              <li><a href={whatsappUrl()} target="_blank" rel="noreferrer" className="hover:text-accent">WhatsApp</a></li>
              <li><a href="mailto:hello@detour.studio" className="hover:text-accent">hello@detour.studio</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Start a project
            </div>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-xs font-semibold text-background"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Detour Studio. All rights reserved.</div>
          <div>Made with intention · Global</div>
        </div>
      </div>
    </footer>
  );
}
