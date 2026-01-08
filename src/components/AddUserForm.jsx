import { useState } from "react";

const AddUserForm = ({ onAddUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    company: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation logic
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    return newErrors;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newUser = {
      id: Date.now(), // unique ID
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      website: formData.website,
      company: { name: formData.company },
      address: { street: formData.address },
    };

    onAddUser(newUser);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      website: "",
      company: "",
      address: "",
    });

    setErrors({});
  };

  return (
    <div className="card">
      <h2>Add New User</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="text"
          name="phone"
          placeholder="Phone *"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}

        <input
          type="text"
          name="website"
          placeholder="Website (optional)"
          value={formData.website}
          onChange={handleChange}
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name (optional)"
          value={formData.company}
          onChange={handleChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Address (optional)"
          value={formData.address}
          onChange={handleChange}
        />

        <button type="submit" className="primary-btn">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
