import { PolicySection } from '../PolicySection';

export function InformationCollection() {
  return (
    <PolicySection title="1. Information We Collect">
      <p className="text-gray-600 mb-4">
        Prox collects various types of information to improve your experience and ensure you receive personalized, relevant, and efficient service. We collect information in the following ways:
      </p>
      
      <h3 className="font-semibold mb-2">a. Information You Provide Directly to Us</h3>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>Account Information: If you choose to create an account, we may collect your name, email address, and account credentials to authenticate your access.</li>
        <li>Communications: When you contact us for support or inquiries, we collect details about the communication, including your contact information and the content of your message.</li>
        <li>Optional User Preferences: If you personalize your experience (e.g., selecting preferred retailers or specifying shopping preferences), we store this information to improve our services.</li>
      </ul>

      <h3 className="font-semibold mb-2">b. Information Collected Automatically</h3>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>Browsing Data: As you shop online, Prox collects information such as:
          <ul className="list-circle pl-6 mt-2">
            <li>URLs of visited product pages.</li>
            <li>Product prices, descriptions, and availability.</li>
            <li>Retailer and basket data.</li>
          </ul>
        </li>
        <li>Device and Usage Information: This includes:
          <ul className="list-circle pl-6 mt-2">
            <li>Browser type and version.</li>
            <li>Operating system and device type.</li>
            <li>IP address and geolocation data (if permitted).</li>
            <li>Cookies and similar tracking technologies to remember your preferences and maintain session integrity.</li>
          </ul>
        </li>
      </ul>

      <h3 className="font-semibold mb-2">c. Information from Third Parties</h3>
      <p className="text-gray-600 mb-2">We may receive additional information about you from third-party services and partners, including:</p>
      <ul className="list-disc pl-6 text-gray-600">
        <li>Retailer APIs or platforms that provide real-time product availability, pricing, and promotions.</li>
        <li>Affiliate networks and analytics providers for campaign performance and engagement insights.</li>
      </ul>
    </PolicySection>
  );
}