import { PrivacyContent } from '../components/privacy/PrivacyContent';

export function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          <hr className="mb-8" />
          <PrivacyContent />
        </div>
      </div>
    </div>
  );
}