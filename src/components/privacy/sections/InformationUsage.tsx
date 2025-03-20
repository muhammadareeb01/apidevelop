import { PolicySection } from '../PolicySection';

export function InformationUsage() {
  return (
    <PolicySection title="2. How We Use Your Information">
      <p className="text-gray-600 mb-4">
        Prox uses the information we collect to deliver, enhance, and personalize our services. Specifically, we use your information for:
      </p>

      <h3 className="font-semibold mb-2">a. Providing Core Services</h3>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>Aggregating product and basket prices across multiple retailers to enable price comparisons.</li>
        <li>Displaying personalized recommendations and alternative product suggestions based on your preferences and browsing behavior.</li>
        <li>Dynamically applying coupons and promotions to reduce your total shopping costs.</li>
        <li>Providing real-time inventory availability and retailer details for local delivery or pickup.</li>
      </ul>

      <h3 className="font-semibold mb-2">b. Enhancing User Experience</h3>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>Improving our algorithms and personalization features to deliver relevant suggestions tailored to your shopping habits.</li>
        <li>Streamlining the shopping process through automated basket aggregation and one-click checkout functionality.</li>
        <li>Providing customer support and troubleshooting assistance when needed.</li>
      </ul>

      <h3 className="font-semibold mb-2">c. Marketing and Communications</h3>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>Sending updates about new features, promotions, or changes to our services.</li>
        <li>Offering rewards and incentives for referrals and user engagement.</li>
      </ul>

      <h3 className="font-semibold mb-2">d. Compliance and Legal Requirements</h3>
      <ul className="list-disc pl-6 text-gray-600">
        <li>Detecting and preventing fraudulent activity, abuse of our platform, or security threats.</li>
        <li>Ensuring compliance with applicable laws, regulations, and contractual obligations.</li>
      </ul>
    </PolicySection>
  );
}