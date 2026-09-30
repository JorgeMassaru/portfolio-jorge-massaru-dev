type PageHeaderProps = {
  title: string;
  description: string;
};

export function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <header className="text-center">
      <h1 className="text-3xl font-bold uppercase text-[#0066ff]">
        {title}
      </h1>

      <p className="mt-4 text-lg tracking-wide text-[#0066ff]">
        {description}
      </p>
    </header>
  );
}