const userMockData = {
    username: "SandroMM", // Replace with a username if implementing user accounts
    email: "marquess457@gmail.com", // Replace with a valid email if implementing user accounts
    password: "hashed_password", // Replace with a hashed password if implementing user accounts
  };
  
  const paymentMockData = [
    {
      user_id: null, // Replace with user ID if user accounts are implemented
      type: "University Fees",
      amount: 1500.00,
      date: new Date("2024-03-15"),
      due_date: new Date("2024-04-10"),
      method: "Bank Transfer",
      confirmation_status: "Pending",
      invoice_receipt: "path/to/invoice.pdf", // Replace with a reference to the uploaded file path (optional)
      extension_requested: false,
    },
    {
      user_id: null, // Replace with user ID if user accounts are implemented
      type: "Accommodation",
      amount: 800.00,
      date: new Date("2024-03-01"),
      due_date: new Date("2024-03-31"),
      method: "Credit Card",
      confirmation_status: "Confirmed",
      invoice_receipt: null, // Optional field
      extension_requested: false,
    },
  ];
  
  module.exports = { userMockData, paymentMockData };
  