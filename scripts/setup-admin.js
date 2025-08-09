require('dotenv').config({ path: '.env' });
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define Admin schema (since we can't import ES modules in this script)
const AdminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 6 },
  name: { type: String, required: true, trim: true },
  role: { type: String, enum: ['super_admin', 'admin'], default: 'super_admin' },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  lastLogin: { type: Date, default: null },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

// Hash password before saving
AdminSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

const Admin = mongoose.model('Admin', AdminSchema);

async function setupAdmin() {
  try {
    // Connect to MongoDB
    console.log(process.env.MONGODB_URI)
    const MONGODB_URI = process.env.MONGODB_URI

    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB successfully!');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ role: 'super_admin' });
    if (existingAdmin) {
      console.log('Super admin already exists:', existingAdmin.email);
      return;
    }

    // Create default admin user
    const adminData = {
      name: 'Super Admin',
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      role: 'super_admin'
    };

    const admin = new Admin(adminData);
    await admin.save();

    console.log('✅ Super admin created successfully!');
    console.log('Email:', adminData.email);
    console.log('Password:', adminData.password);
    console.log('');
    console.log('⚠️  IMPORTANT: Please change the default password after first login!');

  } catch (error) {
    console.error('Error setting up admin:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit(0);
  }
}

// Run the setup
setupAdmin();