export function Stats() {
  const stats = [
    {
      number: "500K+",
      label: "Active Users"
    },
    {
      number: "$10M+",
      label: "User Savings"
    },
    {
      number: "1000+",
      label: "Partner Stores"
    },
    {
      number: "4.8/5",
      label: "User Rating"
    }
  ];

  return (
    <section className="bg-brand py-12 text-white mb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}