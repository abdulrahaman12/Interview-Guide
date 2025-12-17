import { useState } from "react";
import "./App.css";
import SearchInput from "./components/input/SearchInput";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "username is required";
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Your password should contain atleast 6 digits";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert(formData.username);
      alert(formData.email);
      alert(formData.password);
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <Card className="container space-y-2 w-[700px] m-3 px-3 py-4">
          <h2 className="font-bold text-center text-xl">Validation Form</h2>
          <div className="flex flex-row items-center gap-4">
            <SearchInput
              label="Username"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              error={errors.username}
              disabled
            />
          </div>
          <div className="flex flex-row items-center gap-4">
            <SearchInput
              label="Email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
          </div>
          <div className="flex flex-row items-center gap-4">
            <SearchInput
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
          </div>
          <Button className="w-64 mx-auto" type="submit">
            Submit
          </Button>
        </Card>
      </form>
    </>
  );
}

export default App;
