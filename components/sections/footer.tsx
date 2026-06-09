import { Crosshairs } from "@/components/ui/crosshairs";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative border-x border-edge screen-line-before screen-line-after p-4 sm:p-6"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <Crosshairs top={true} bottom={true} />
      <div className="flex flex-col sm:flex-row justify-between w-full items-center gap-4">
        <p
          className="text-xs font-medium leading-5 text-muted-foreground"
          itemProp="copyright"
        >
          &copy; {currentYear} – Dhruvil Mistry. All rights reserved.
        </p>

        <a
          href="https://github.com/dhruvil-codes"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-border px-2.5 py-1 rounded-xl font-medium text-sm cursor-pointer group flex items-center gap-1.5 hover:bg-muted hover:border-border/80 transition-all"
        >
          <div className="h-2 w-2 rounded-full bg-foreground group-hover:scale-110 transition-transform" />
          GitHub Profile
        </a>
      </div>
    </footer>
  );
}
