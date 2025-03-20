import { PolicySection } from '../components/privacy/PolicySection';

export function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: January 21, 2025</p>
          
          <PolicySection title="1. Introduction">
            <p className="text-gray-600 mb-4">
              Welcome to Prox! These Terms and Conditions ("Terms") govern your access to and use of Prox's services, including our website, mobile applications, browser extensions, and any other software provided by Prox (collectively, the "Services"). By accessing or using our Services, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our Services.
            </p>
          </PolicySection>

          <PolicySection title="2. Privacy Policy">
            <p className="text-gray-600">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and share information about you when you use our Services. By using our Services, you consent to our collection and use of your information as outlined in the Privacy Policy.
            </p>
          </PolicySection>

          <PolicySection title="3. Use of Services">
            <p className="text-gray-600 mb-4">
              <strong className="font-semibold">Eligibility:</strong> You must be at least 18 years old and capable of forming a binding contract to use our Services.
            </p>
            <p className="text-gray-600 mb-4">
              <strong className="font-semibold">Account Registration:</strong> To access certain features, you may need to create an account. You agree to provide accurate and complete information and to keep this information updated. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            <p className="text-gray-600 mb-2">
              <strong className="font-semibold">Prohibited Conduct:</strong> You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Use the Services for any illegal or unauthorized purpose.</li>
              <li>Access or use the Services to collect any market research for a competing business.</li>
              <li>Use the Services to violate any laws in your jurisdiction.</li>
              <li>Interfere with or disrupt the Services or servers or networks connected to the Services.</li>
            </ul>
          </PolicySection>

          <PolicySection title="4. Intellectual Property">
            <p className="text-gray-600">
              All content and materials available on the Services, including but not limited to text, graphics, website name, code, images, and logos are the intellectual property of Prox and are protected by applicable copyright and trademark law. Any inappropriate use, including but not limited to the reproduction, distribution, display, or transmission of any content on the Services is strictly prohibited, unless specifically authorized by Prox.
            </p>
          </PolicySection>

          <PolicySection title="5. Third-Party Links">
            <p className="text-gray-600">
              Our Services may contain links to third-party websites or services that are not owned or controlled by Prox. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Prox shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
            </p>
          </PolicySection>

          <PolicySection title="6. Disclaimer of Warranties">
            <p className="text-gray-600">
              The Services are provided on an "as-is" and "as available" basis. Prox makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </PolicySection>

          <PolicySection title="7. Limitation of Liability">
            <p className="text-gray-600">
              In no event shall Prox, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your use or inability to use the Services; (ii) any unauthorized access to or use of our servers and/or any personal information stored therein; (iii) any interruption or cessation of transmission to or from the Services; and (iv) any bugs, viruses, trojan horses, or the like that may be transmitted to or through our Services by any third party.
            </p>
          </PolicySection>

          <PolicySection title="8. Indemnification">
            <p className="text-gray-600">
              You agree to defend, indemnify and hold harmless Prox and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Services, or b) a breach of these Terms.
            </p>
          </PolicySection>

          <PolicySection title="9. Changes to Terms">
            <p className="text-gray-600">
              Prox reserves the right, in its sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised terms.
            </p>
          </PolicySection>

          <PolicySection title="10. Governing Law">
            <p className="text-gray-600">
              These Terms shall be governed and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
          </PolicySection>

          <PolicySection title="11. Contact Us">
            <p className="text-gray-600">
              If you have any questions about these Terms, please contact us at customerservice@joinprox.com.
            </p>
          </PolicySection>
        </div>
      </div>
    </div>
  );
}