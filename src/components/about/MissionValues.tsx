export function MissionValues() {
  const values = [
    {
      title: "Transparency",
      description: "We believe in providing clear, accurate pricing information to help you make informed decisions."
    },
    {
      title: "Innovation",
      description: "Our technology continuously evolves to bring you the best shopping experience possible."
    },
    {
      title: "Savings",
      description: "We're committed to helping you save money on every grocery purchase."
    },
    {
      title: "Community",
      description: "Building a community of smart shoppers who share tips and insights."
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Our Values</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}