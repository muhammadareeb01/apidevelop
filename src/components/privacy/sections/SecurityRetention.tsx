import { PolicySection } from '../PolicySection';

export function SecurityRetention() {
  return (
    <>
      <PolicySection title="5. Data Security">
        <p className="text-gray-600 mb-4">
          Prox is committed to safeguarding your information using industry-standard security measures, including:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>Encryption of sensitive data.</li>
          <li>Regular monitoring and auditing of our systems.</li>
          <li>Limited access to personal information by authorized personnel only.</li>
        </ul>
        <p className="text-gray-600">
          Despite our efforts, no method of transmission over the internet or electronic storage is completely secure. Please take steps to protect your account credentials and notify us immediately if you suspect unauthorized access.
        </p>
      </PolicySection>

      <PolicySection title="6. Data Retention">
        <p className="text-gray-600">
          We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal requirements, or resolve disputes. Once your data is no longer needed, we will securely delete or anonymize it.
        </p>
      </PolicySection>
    </>
  );
}