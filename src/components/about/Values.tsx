import { companyValues } from '../../data/values';

export function Values() {
  return (
    <section className="mb-24">
      <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {companyValues.map((value, index) => (
          <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow text-center">
            <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
            <p className="text-gray-600 text-lg">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}