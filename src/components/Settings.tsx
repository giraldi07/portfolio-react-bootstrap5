import { X } from 'lucide-react';
import { Settings as SettingsType } from '../types';

interface SettingsProps {
  settings: SettingsType;
  setSettings: (settings: SettingsType) => void;
  onClose: () => void;
}

export default function Settings({ settings, setSettings, onClose }: SettingsProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Settings</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Cursor Style</label>
            <select
              value={settings.cursorStyle}
              onChange={(e) => setSettings({ ...settings, cursorStyle: e.target.value as any })}
              className="w-full p-2 rounded border border-gray-200 dark:border-gray-800
                bg-white dark:bg-gray-900"
            >
              <option value="default">Default</option>
              <option value="dot">Dot</option>
              <option value="border">Border</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}