import { teamMembers } from '../../data/team';

export function Team() {
  return (
    <section className="mb-24">
      <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Team</h2>
      <div className="max-w-2xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow text-center">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-96 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-brand font-medium mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}