export function Mission() {
  return (
    <section className="mb-24 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          We believe everyone deserves access to the best grocery deals without spending hours comparing prices. 
          Our platform uses advanced technology to automatically find the best prices, apply coupons, and help you 
          save on every purchase.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Smart Shopping</h3>
            <p className="text-gray-600">Real-time price comparisons and automated deal finding across stores.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Save Time & Money</h3>
            <p className="text-gray-600">One-click price matching and automatic coupon application.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Shop Anywhere</h3>
            <p className="text-gray-600">Works with your favorite grocery stores, both online and in-store.</p>
          </div>
        </div>
      </div>
    </section>
  );
}