type SectionTitleProps = {
  children: React.ReactNode;
  light?: boolean;
};

export function SectionTitle({
  children,
  light = false,
}: SectionTitleProps) {
  return (
    <h2
      className={`text-center text-3xl font-bold uppercase ${
        light ? "text-white" : "text-[#0066ff]"
      }`}
    >
      {children}
    </h2>
  );
}