import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutStepper from "../Components/Checkout/CheckoutStepper";

const Documentation = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    company: "",
    documentNumber: "",
    gstNumber: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">

      <CheckoutStepper currentStep={2} />

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">

        <div className="rounded-xl border bg-white p-8 shadow-sm lg:col-span-2">

          <h1 className="mb-8 text-3xl font-bold">
            Business Verification
          </h1>

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block font-medium">
                Full Name
              </label>

              <input
                className="w-full rounded-lg border p-3"
                placeholder="As per ID proof"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Company Name
              </label>

              <input
                className="w-full rounded-lg border p-3"
                placeholder="Company Name"
                name="company"
                value={form.company}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                ID Number
              </label>

              <input
                className="w-full rounded-lg border p-3"
                placeholder="Document Number"
                name="documentNumber"
                value={form.documentNumber}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                GST Number
              </label>

              <input
                className="w-full rounded-lg border p-3"
                placeholder="GSTIN"
                name="gstNumber"
                value={form.gstNumber}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="mt-8">

            <label className="mb-2 block font-medium">
              GST Certificate
            </label>

            <input
              type="file"
              className="w-full rounded-lg border p-3"
            />

          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-2 block font-medium">
                Personal Photo
              </label>

              <input
                type="file"
                className="w-full rounded-lg border p-3"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">
                Identity Proof
              </label>

              <input
                type="file"
                className="w-full rounded-lg border p-3"
              />

            </div>

          </div>

        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm h-fit">

          <h2 className="text-2xl font-bold">
            Verification
          </h2>

          <p className="mt-4 text-gray-500">
            Please upload valid business documents.
          </p>

          <button
            onClick={() => navigate("/review")}
            className="mt-10 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Verify & Continue
          </button>

        </div>

      </div>

    </section>
  );
};

export default Documentation;