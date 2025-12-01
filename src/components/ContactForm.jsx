import { useState, useRef } from "react";
import { TextField, Button, Box } from "@mui/material";
import { getMessages,postMessage } from "../common/api";


export default function ContactForm({ onFormChange }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [dataList, setDataList] = useState([]);
  const debounceRef = useRef(null);

  const handleChange = (e) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        if (onFormChange) onFormChange(updated);

      }, 1000);

  };

  const validate = () => {
    let temp = {};

    if (!form.name.trim()) temp.name = "Name is required";
    if (!form.email.trim()) {
      temp.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        temp.email = "Invalid email format";
      }
    }

    if (!form.message.trim())
      temp.message = "message is required";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = async() => {
    if (!validate()) return;

    setDataList([...dataList, form]);

    // Notify parent after submission
    const success = await postMessage(form);
    if (success) {
      alert("Message saved!");
      setForm({ name: "", email: "", message: "" });
      if (onFormChange) onFormChange({});
      console.log('from api ',getMessages())
    } else {
      alert("Failed to save message");
    }
  };

  const commonStyles = {
    InputLabelProps: { style: { color: "white", fontFamily: "Fira Code" } },
    InputProps: {
      style: { color: "white", fontFamily: "Fira Code" },
      sx: {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#314158"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#90caf9"
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#42a5f5"
        }
      }
    },
    FormHelperTextProps: { style: { fontFamily: "Fira Code" } }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 400,
        padding: 3,
        borderRadius: 2
      }}
    >
      <TextField
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        {...commonStyles}
      />

      <TextField
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        {...commonStyles}
      />

      <TextField
        label="Message"
        name="message"
        value={form.message}
        onChange={handleChange}
        multiline
        rows={4}
        error={!!errors.message}
        helperText={errors.message}
        {...commonStyles}
      />

      <Button variant="outlined" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
}
