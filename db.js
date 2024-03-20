const mongoose = require('mongoose');

// Connect to MongoDB database (Optional for development)
const uri = "mongodb+srv://smarques:5Sg1aSwRSWoQm1hv@finstudent.mhx44ef.mongodb.net/";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log('Error connecting to MongoDB...', err));

// Define User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true  }, // For logic if implemented
    email: { type: String, required: true, unique: true  },
    password: { type: String, required: true }, // hashed and salted password
});

// Define Payment Schema
const paymentSchema = new mongoose.Schema({
    user_id: { type: mongoose.Types.ObjectId,  ref: 'User' }, // Reference if User is implemented
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    due_date: { type: Date, required: true },
    method: { type: String, required: true },
    confirmation_status: { type: String, required: true, default: 'Pending' },
    invoice_receipt: { type: String }, // Reference to uploaded file path
    extension_requested: { type: Boolean, default: false }, // For tracking extension requests
})

// Export Models
module.exports = { User: mongoose.model('User', userSchema), Payment: mongoose.model('Payment', paymentSchema) };