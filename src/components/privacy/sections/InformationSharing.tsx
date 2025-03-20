import { PolicySection } from '../PolicySection';

export function InformationSharing() {
  return (
    <PolicySection title="3. Sharing Your Information">
      <p className="text-gray-600 mb-4">
        Prox does not sell your personal information. However, we may share your data in the following ways:
      </p>

      <h3 className="font-semibold mb-2">a. With Retailers</h3>
      <p className="text-gray-600 mb-4">
        When you use Prox to interact with retailers, such as adding products to your basket or completing checkout, we share the necessary basket and product data with the retailer's platform to facilitate your transaction.
      </p>

      <h3 className="font-semibold mb-2">b. With Service Providers</h3>
      <p className="text-gray-600 mb-2">Prox engages trusted third-party service providers to assist with:</p>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>Hosting and infrastructure (e.g., cloud storage).</li>
        <li>Data analytics and marketing.</li>
        <li>Customer support.</li>
      </ul>
      <p className="text-gray-600 mb-4">
        These service providers are contractually obligated to protect your information and use it only for the purposes specified by Prox.
      </p>

      <h3 className="font-semibold mb-2">c. For Legal Reasons</h3>
      <p className="text-gray-600 mb-2">We may disclose your information:</p>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>To comply with legal obligations or enforceable government requests.</li>
        <li>To protect our rights, users, and operations against harm or fraudulent activity.</li>
      </ul>

      <h3 className="font-semibold mb-2">d. As Aggregated Data</h3>
      <p className="text-gray-600">
        We may share aggregated or anonymized data that cannot reasonably identify you. For example, we might publish insights about shopping trends derived from Prox's user base.
      </p>
    </PolicySection>
  );
}