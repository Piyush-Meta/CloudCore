import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBillingInfo } from "../../Utils/CheckoutSlice";
import BillingInput from "./BillingInput";
import countries from "../../Constants/countries";
import { useNavigate } from "react-router-dom";

const BillingForm = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    state: "",
    country: "India",
    zipCode: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateBillingInfo(form));

    navigate("/documentation");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border bg-white p-8 shadow-sm"
    >
      <div className="grid gap-5 md:grid-cols-2">

        <BillingInput
          label="First Name"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />

        <BillingInput
          label="Last Name"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />

        <BillingInput
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <BillingInput
          label="Phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />

        <BillingInput
          label="Company"
          name="company"
          required={false}
          value={form.company}
          onChange={handleChange}
        />

        <BillingInput
          label="Address"
          name="address"
          value={form.address}
          onChange={handleChange}
        />

        <BillingInput
          label="City"
          name="city"
          value={form.city}
          onChange={handleChange}
        />

        <BillingInput
          label="State"
          name="state"
          value={form.state}
          onChange={handleChange}
        />

        <div>

          <label className="text-sm font-medium">
            Country
          </label>

          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3"
          >
            {countries.map((country) => (
              <option
                key={country}
                value={country}
              >
                {country}
              </option>
            ))}
          </select>

        </div>

        <BillingInput
          label="Zip Code"
          name="zipCode"
          value={form.zipCode}
          onChange={handleChange}
        />

      </div>

      <button
        className="rounded-lg bg-blue-600 px-8 py-3 text-white transition hover:bg-blue-700"
      >
        Continue
      </button>

    </form>
  );
};

export default BillingForm;