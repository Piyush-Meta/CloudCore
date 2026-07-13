import React from "react";

export default function VerificationForm({ formData, setFormData, handleFileChange }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-6 lg:p-8 rounded-xl border border-gray-200 shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Individual Business Verification</h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-1">Full Name</label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-6 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
              placeholder="As per ID proof"
              type="text"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Company Name</label>
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full px-6 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
              placeholder="Legal entity name"
              type="text"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-1">Personal ID Document Number</label>
            <input
              name="personalId"
              value={formData.personalId}
              onChange={handleInputChange}
              className="w-full px-6 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
              placeholder="Enter registration or certificate number"
              type="text"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">GST Certification Number</label>
            <input
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleInputChange}
              className="w-full px-6 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
              placeholder="GSTIN"
              type="text"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">GST Certificate Upload</label>
            <label className="border-2 border-dashed border-gray-200 rounded-lg p-6 flex flex-col items-center gap-1 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
              <span className="material-symbols-outlined text-gray-600">upload_file</span>
              <span className="text-sm">Click to upload or drag and drop</span>
              <input className="hidden" type="file" onChange={(e) => handleFileChange(e, 'gstFile')} />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1">Personal Picture Upload</label>
              <label className="border-2 border-dashed border-gray-200 rounded-lg p-6 flex flex-col items-center gap-1 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                <span className="material-symbols-outlined text-gray-600">account_circle</span>
                <span className="text-sm">Upload Photo</span>
                <input className="hidden" type="file" onChange={(e) => handleFileChange(e, 'photoFile')} />
              </label>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Identity Proof Card Upload</label>
              <label className="border-2 border-dashed border-gray-200 rounded-lg p-6 flex flex-col items-center gap-1 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                <span className="material-symbols-outlined text-gray-600">badge</span>
                <span className="text-sm">Upload ID Proof</span>
                <input className="hidden" type="file" onChange={(e) => handleFileChange(e, 'idFile')} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}