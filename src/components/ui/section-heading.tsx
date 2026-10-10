import { cn } from "cn";

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "start";
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        align === "start" && "text-start",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 font-heading text-lg font-bold",
            tone === "light" ? "text-primary" : "text-gold"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-3xl leading-snug font-extrabold text-balance sm:text-4xl lg:text-[2.75rem]",
          tone === "light" ? "text-foreground" : "text-primary-foreground"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg leading-relaxed",
            align === "center" && "mx-auto",
            tone === "light" ? "text-muted-foreground" : "text-primary-foreground/80"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export { SectionHeading };
