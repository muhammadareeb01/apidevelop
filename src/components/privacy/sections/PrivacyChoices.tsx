import { PolicySection } from '../PolicySection';

export function PrivacyChoices() {
  return (
    <PolicySection title="4. Your Privacy Choices">
      <p className="text-gray-600 mb-4">
        You have control over your personal information. Prox offers the following options:
      </p>

      <h3 className="font-semibold mb-2">a. Managing Data Collection</h3>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>Opt-Out of Tracking: You can disable data collection by turning off the browser extension or adjusting your settings.</li>
        <li>Cookie Management: Use your browser settings to manage or block cookies.</li>
      </ul>

      <h3 className="font-semibold mb-2">b. Accessing and Updating Your Data</h3>
      <p className="text-gray-600 mb-4">
        You can request access to the data we hold about you or ask us to update inaccurate information by contacting us at customerservice@joinprox.com.
      </p>

      <h3 className="font-semibold mb-2">c. Deleting Your Data</h3>
      <p className="text-gray-600">
        You can request that we delete your personal information and deactivate your account. Note that certain data may need to be retained to comply with legal obligations.
      </p>
    </PolicySection>
  );
}