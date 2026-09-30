type PageHeaderBlueProps = {
  title: string;
  description?: string;
};

export function PageHeaderBlue({
  title,
  description,
}: PageHeaderBlueProps) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <h1 className="text-2xl font-bold uppercase tracking-wide sm:text-3xl">
        {title}
      </h1>

      {description && (
        <p className="mt-4 text-lg text-white/85">
          {description}
        </p>
      )}
    </header>
  );
}