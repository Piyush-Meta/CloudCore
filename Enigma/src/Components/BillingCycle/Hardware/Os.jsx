import React, { useState } from 'react'


const Os = () => {
    const [selectedOS, setSelectedOS] = useState('ubuntu');
    const osOptions = [
    { id: 'almalinux', name: 'AlmaLinux', isFree: true, hasIcon: false },
    { id: 'ubuntu', name: 'Ubuntu', isFree: true, hasIcon: true },
    { id: 'debian', name: 'Debian', isFree: true, hasIcon: true }
  ];
  return (
    <div>
      <section className="space-y-6">
              <header>
                <h2 className="text-2xl font-bold text-[#141b2c]">Step 2: Choose Operating System</h2>
                <p style={{ color: '#44474d' }} className="text-sm">Select the base environment for your enterprise node.</p>
              </header>

              <div className="grid grid-cols-1 gap-4">
                {osOptions.map((os) => {
                  const isChecked = selectedOS === os.id;
                  return (
                    <label key={os.id} className="cursor-pointer group block" onClick={() => setSelectedOS(os.id)}>
                      <div 
                        style={{ 
                          backgroundColor: isChecked ? 'rgba(49, 107, 243, 0.04)' : '#ffffff',
                          borderColor: isChecked ? '#0051d5' : '#c5c6ce'
                        }}
                        className={`p-6 border rounded-xl hover:bg-[#f1f3ff] transition-all duration-200 shadow-sm relative flex flex-col justify-between ${
                          isChecked ? 'ring-2 ring-blue-100' : ''
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex flex-col gap-2">
                            {os.hasIcon && (
                              <svg className="w-5 h-5 text-[#0051d5]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            )}
                            <h3 className="text-lg font-bold text-[#141b2c]">{os.name}</h3>
                          </div>

                          <div className="flex flex-col items-end gap-2">
                            {os.isFree && (
                              <span className="bg-green-500/10 text-green-600 text-xs font-extrabold px-2 py-0.5 rounded tracking-wide">
                                FREE
                              </span>
                            )}
                            {isChecked && (
                              <svg className="w-6 h-6 text-[#0051d5]" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-14 1.414L9 10.586l3.293-3.293a1 1 0 00-1.414-1.414z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </section>
    </div>
  )
}

export default Os
