interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
}

export function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}