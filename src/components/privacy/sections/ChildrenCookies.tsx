import { PolicySection } from '../PolicySection';

export function ChildrenCookies() {
  return (
    <>
      <PolicySection title="7. Children's Privacy">
        <p className="text-gray-600">
          Prox's services are not intended for children under the age of 13. We do not knowingly collect information from children. If we become aware that a child has provided us with personal data, we will delete it promptly.
        </p>
      </PolicySection>

      <PolicySection title="8. Cookies and Tracking Technologies">
        <p className="text-gray-600 mb-4">
          Prox uses cookies and similar technologies to improve your experience. These include:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>Session Cookies: To maintain your login session.</li>
          <li>Preference Cookies: To remember your settings and preferences.</li>
          <li>Analytics Cookies: To track usage and optimize performance.</li>
        </ul>
        <p className="text-gray-600">
          You can manage your cookie preferences through your browser settings.
        </p>
      </PolicySection>
    </>
  );
}