export const CV_PATH = `${process.env.PUBLIC_URL}/Resume_Rafi_Imam_RUET17.pdf`;

export default function DownloadCvButton({
  variant = "solid",
  className = "",
}: {
  variant?: "solid" | "outline" | "header";
  className?: string;
}) {
  const styles = {
    solid:
      "bg-stamp text-cream hover:bg-[#a92c23] px-5 py-3 text-sm",
    outline:
      "border-2 border-stamp text-stamp bg-paper hover:bg-stamp hover:text-cream px-5 py-3 text-sm",
    header:
      "bg-stamp text-cream hover:bg-[#a92c23] px-3.5 py-2 text-xs sm:text-sm",
  } as const;
  return (
    <a
      href={CV_PATH}
      download="Resume_Rafi_Imam_RUET17.pdf"
      className={`inline-flex items-center gap-2 font-bold tracking-widest uppercase transition-colors ${styles[variant]} ${className}`}
    >
      <span aria-hidden>↓</span> Download CV
    </a>
  );
}
