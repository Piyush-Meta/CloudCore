import React from 'react'

const EnterpriseNode = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#ffffff', borderColor: '#c5c6ce' }} className="p-6 rounded-xl border flex flex-col md:flex-row gap-6 items-center shadow-sm">
              <div className="md:w-1/3 shrink-0">
                <img alt="Server Hardware" className="w-full h-auto rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLsjNgV-pAlnF3766ff-Z5t6DH5U73tiYDmRUvG28YsWgJNhcfwW0rliakRBk2Mw-fTFOJcDx8NyJ513oWARUIWXdJjuy77H8ANa6WvmQI1-zleXRY61vmQDzU4s3TRF5i4nCgCQCsrnRFsIhfyjktWyBk-vZzEVoUmfRgo-4xdAK8KCN4nM0_OSb76uGCwxN5s9F4K2WBDG7_knOR4HdgM0Qr0wuXUO-tC2dg17AW4M4D5rlgzLo_Ib-Ws" />
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-[#141b2c] tracking-tight">Configure Your Enterprise Node</h1>
                <p style={{ color: '#44474d' }} className="text-sm leading-relaxed">
                  Select high-performance components backed by our Tier-4 infrastructure. All hardware includes a 99.99% uptime SLA and 24/7 proactive monitoring.
                </p>
              </div>
            </div>
    </div>
  )
}

export default EnterpriseNode
