import { useState } from 'react';
import { Send, X } from 'lucide-react';
import { Button } from './Button';

interface RetailerOption {
  id: string;
  name: string;
}

const commonRetailers: RetailerOption[] = [
  { id: 'albertsons', name: 'Albertsons' },
  { id: 'aldi', name: 'Aldi' },
  { id: 'foodlion', name: 'Food Lion' },
  { id: 'heb', name: 'H-E-B' },
  { id: 'kroger', name: 'Kroger' },
  { id: 'meijer', name: 'Meijer' },
  { id: 'publix', name: 'Publix' },
  { id: 'ralphs', name: 'Ralphs' },
  { id: 'safeway', name: 'Safeway' },
  { id: 'sprouts', name: 'Sprouts Farmers Market' },
  { id: 'target', name: 'Target' },
  { id: 'traderjoes', name: "Trader Joe's" },
  { id: 'vons', name: 'Vons' },
  { id: 'wegmans', name: 'Wegmans' },
  { id: 'walmart', name: 'Walmart' },
  { id: 'wholeFoods', name: 'Whole Foods' },
  { id: 'other', name: 'Other' },
];

type DevicePreference = 'web' | 'mobile' | null;

export function WaitlistForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [selectedRetailers, setSelectedRetailers] = useState<string[]>([]);
  const [showRetailerDropdown, setShowRetailerDropdown] = useState(false);
  const [devicePreference, setDevicePreference] = useState<DevicePreference>(null);
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const API_URL =  'http://localhost:3001';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !zipCode) {
      setStatus('error');
      setErrorMessage('Name, email, and ZIP code are required');
      return;
    }

    if (selectedRetailers.length === 0) {
      setStatus('error');
      setErrorMessage('Please select at least one preferred retailer');
      return;
    }

    if (!devicePreference) {
      setStatus('error');
      setErrorMessage('Please select your preferred device');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch(`${API_URL}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          zip_code: zipCode,
          preferred_retailers: selectedRetailers,
          device_preference: devicePreference,
          feedback,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to join waitlist');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setZipCode('');
      setSelectedRetailers([]);
      setDevicePreference(null);
      setFeedback('');
    } catch (error) {
      console.error('Waitlist error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to join waitlist');
    }
  };

  const handleRetailerSelect = (retailerId: string) => {
    if (selectedRetailers.includes(retailerId)) {
      setSelectedRetailers(prev => prev.filter(id => id !== retailerId));
    } else if (selectedRetailers.length < 3) {
      setSelectedRetailers(prev => [...prev, retailerId]);
    }
    setShowRetailerDropdown(false);
  };

  const removeRetailer = (retailerId: string) => {
    setSelectedRetailers(prev => prev.filter(id => id !== retailerId));
  };

  return (
    <div className="max-w-2xl w-full mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand"
              disabled={status === 'loading' || status === 'success'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Fixed from setName
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand"
              disabled={status === 'loading' || status === 'success'}
            />
          </div>
        </div>

        {/* ZIP Code and Retailers row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
            <input
              type="text"
              placeholder="Enter your ZIP code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand"
              disabled={status === 'loading' || status === 'success'}
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred retailers (select up to 3)
            </label>

            {/* Selected retailers display */}
            <div className="flex flex-wrap gap-2 mb-2">
              {selectedRetailers.map(retailerId => {
                const retailer = commonRetailers.find(r => r.id === retailerId);
                return (
                  <div key={retailerId} className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1">
                    <span className="text-sm">{retailer?.name}</span>
                    <button
                      type="button"
                      onClick={() => removeRetailer(retailerId)}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Dropdown trigger */}
            <button
              type="button"
              onClick={() => setShowRetailerDropdown(!showRetailerDropdown)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-left"
              disabled={status === 'loading' || status === 'success'}
            >
              Select a retailer
            </button>

            {/* Dropdown menu */}
            {showRetailerDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                {commonRetailers.map(retailer => (
                  <button
                    key={retailer.id}
                    type="button"
                    onClick={() => handleRetailerSelect(retailer.id)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={selectedRetailers.length >= 3 && !selectedRetailers.includes(retailer.id)}
                  >
                    {retailer.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Device Preference */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Device</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setDevicePreference('web')}
              className={`px-4 py-3 rounded-lg border ${
                devicePreference === 'web'
                  ? 'border-brand bg-brand text-white'
                  : 'border-gray-300 hover:border-brand'
              }`}
              disabled={status === 'loading' || status === 'success'}
            >
              Web Browser
            </button>
            <button
              type="button"
              onClick={() => setDevicePreference('mobile')}
              className={`px-4 py-3 rounded-lg border ${
                devicePreference === 'mobile'
                  ? 'border-brand bg-brand text-white'
                  : 'border-gray-300 hover:border-brand'
              }`}
              disabled={status === 'loading' || status === 'success'}
            >
              Mobile App
            </button>
          </div>
        </div>

        {/* Feedback */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Any recommendations for product features (optional)
          </label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your thoughts..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand h-24"
            disabled={status === 'loading' || status === 'success'}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-brand hover:bg-brand-dark text-white"
          disabled={status === 'loading' || status === 'success'}
        >
          Join Waitlist
          <Send className="ml-2 h-4 w-4" />
        </Button>

        {status === 'error' && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}
        {status === 'success' && (
          <p className="text-green-600 text-sm text-center">
            Thanks for joining! We'll notify you when Prox launches.
          </p>
        )}
      </form>
    </div>
  );
}