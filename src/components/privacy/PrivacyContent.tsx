import { PolicySection } from './PolicySection';
import {
  InformationCollection,
  InformationUsage,
  InformationSharing,
  PrivacyChoices,
  SecurityRetention,
  ChildrenCookies,
  InternationalUpdates,
  ContactUs
} from './sections';

export function PrivacyContent() {
  return (
    <div className="prose max-w-none">
      <div className="mb-8">
        <p className="text-lg mb-2">Effective Date: 12/11/2024</p>
        <p className="text-gray-600">
          At Prox, your privacy and trust are of the utmost importance to us. This Privacy Policy explains how Prox collects, uses, and safeguards your personal information when you use our browser extension, mobile application, or website. By using Prox, you consent to the data practices outlined in this Privacy Policy. If you have any questions, please contact us at customerservice@joinprox.com.
        </p>
      </div>

      <InformationCollection />
      <InformationUsage />
      <InformationSharing />
      <PrivacyChoices />
      <SecurityRetention />
      <ChildrenCookies />
      <InternationalUpdates />
      <ContactUs />
    </div>
  );
}