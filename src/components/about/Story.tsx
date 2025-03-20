export function Story() {
  return (
    <section className="mb-24">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <div className="space-y-6">
            <p className="text-gray-600">
              Founded in 2024, Prox began with a simple observation: grocery shopping 
              shouldn't be complicated or expensive. Our founders, having experienced 
              firsthand the challenges of finding the best deals while grocery shopping, 
              decided to create a solution.
            </p>
            <p className="text-gray-600">
              What started as a simple price comparison tool has evolved into a 
              comprehensive platform that helps millions of shoppers save money every day. 
              Our technology now includes advanced features like automatic coupon application, 
              price tracking, and personalized deal alerts.
            </p>
            <p className="text-gray-600">
              Today, we're proud to have helped our users save millions of dollars on their 
              grocery purchases, and we're just getting started.
            </p>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000"
            alt="Grocery shopping experience"
            className="rounded-lg shadow-xl"
          />
          <div className="absolute inset-0 bg-brand/10 rounded-lg" />
        </div>
      </div>
    </section>
  );
}