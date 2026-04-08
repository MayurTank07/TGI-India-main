import { useState } from 'react';
import { Upload, Link as LinkIcon, X } from 'lucide-react';
import { mediaAPI } from '../../services/api';

export default function ImageUpload({ currentImage, onImageUploaded, usedIn = '' }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [uploadMethod, setUploadMethod] = useState('file'); // 'file' or 'url'
  const [imageUrl, setImageUrl] = useState('');

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size must be less than 5MB');
      return;
    }

    setError('');
    setUploading(true);

    try {
      const response = await mediaAPI.uploadFile(file, usedIn);
      if (response.success && response.media) {
        onImageUploaded(response.media.url, response.media.publicId);
      }
    } catch (err) {
      setError(err.message || 'Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleUrlUpload = async () => {
    if (!imageUrl.trim()) {
      setError('Please enter an image URL');
      return;
    }

    setError('');
    setUploading(true);

    try {
      const response = await mediaAPI.uploadUrl(imageUrl, usedIn);
      if (response.success && response.media) {
        onImageUploaded(response.media.url, response.media.publicId);
        setImageUrl('');
      }
    } catch (err) {
      setError(err.message || 'Failed to upload image from URL');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Current Image Preview */}
      {currentImage && (
        <div className="relative">
          <img 
            src={currentImage} 
            alt="Current" 
            className="w-full h-48 object-cover rounded-lg border border-gray-200"
          />
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-600">
            Current Image
          </div>
        </div>
      )}

      {/* Upload Method Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        <button
          type="button"
          onClick={() => setUploadMethod('file')}
          className={`px-4 py-2 text-sm font-medium transition ${
            uploadMethod === 'file'
              ? 'border-b-2 border-purple-600 text-purple-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Upload size={16} className="inline mr-1" />
          Upload File
        </button>
        <button
          type="button"
          onClick={() => setUploadMethod('url')}
          className={`px-4 py-2 text-sm font-medium transition ${
            uploadMethod === 'url'
              ? 'border-b-2 border-purple-600 text-purple-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <LinkIcon size={16} className="inline mr-1" />
          From URL
        </button>
      </div>

      {/* Upload Interface */}
      {uploadMethod === 'file' ? (
        <div>
          <label className="block">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition cursor-pointer">
              <Upload size={32} className="mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-600 mb-1">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-400">
                PNG, JPG, GIF up to 5MB
              </p>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
              disabled={uploading}
            />
          </label>
        </div>
      ) : (
        <div className="flex gap-2">
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={uploading}
          />
          <button
            type="button"
            onClick={handleUrlUpload}
            disabled={uploading || !imageUrl.trim()}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
          <X size={16} className="text-red-600" />
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {/* Uploading State */}
      {uploading && (
        <div className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"></div>
          <p className="text-sm text-blue-600">Uploading to Cloudinary...</p>
        </div>
      )}
    </div>
  );
}
