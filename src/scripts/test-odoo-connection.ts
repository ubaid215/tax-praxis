import { odooClient } from './src/lib/odoo';

async function testOdooConnection() {
  console.log('🔧 Testing Odoo Connection...\n');

  // Check configuration
  console.log('📋 Configuration:');
  console.log(`URL: ${process.env.ODOO_URL}`);
  console.log(`DB: ${process.env.ODOO_DB}`);
  console.log(`Username: ${process.env.ODOO_USERNAME}`);
  console.log(`API Key: ${process.env.ODOO_API_KEY?.substring(0, 10)}...`);
  console.log('');

  if (!odooClient.isConfigured()) {
    console.error('❌ Odoo is not configured properly');
    console.error('Please check your .env file has all required values');
    return;
  }

  try {
    // Test 1: Authentication
    console.log('🔐 Test 1: Authentication...');
    const uid = await odooClient['authenticate']();
    console.log(`✅ Success! User ID: ${uid}\n`);

    // Test 2: Create a test appointment
    console.log('📅 Test 2: Creating test appointment...');
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(14, 0, 0, 0); // 2 PM tomorrow

    const endTime = new Date(tomorrow);
    endTime.setHours(15, 0, 0, 0); // 3 PM

    const appointmentId = await odooClient.createAppointment({
      partner_name: 'Test Customer',
      partner_email: 'test@example.com',
      partner_phone: '+923001234567',
      start_datetime: tomorrow.toISOString(),
      stop_datetime: endTime.toISOString(),
      description: 'Test appointment from Tax Praxis booking system',
      state: 'open',
    });

    console.log(`✅ Appointment created! ID: ${appointmentId}\n`);

    // Test 3: Read the appointment
    console.log('📖 Test 3: Reading appointment...');
    const appointment = await odooClient.getAppointment(appointmentId);
    console.log('✅ Appointment details:');
    console.log(JSON.stringify(appointment, null, 2));
    console.log('');

    // Test 4: Delete the test appointment
    console.log('🗑️ Test 4: Cleaning up (deleting test appointment)...');
    await odooClient.deleteAppointment(appointmentId);
    console.log('✅ Test appointment deleted\n');

    console.log('🎉 All tests passed! Odoo integration is working perfectly!');
    console.log('\n📍 Next steps:');
    console.log('1. Your Odoo integration is ready to use');
    console.log('2. Bookings will now sync to your Odoo calendar');
    console.log('3. Check your Odoo Calendar app to see synced appointments');

  } catch (error: any) {
    console.error('\n❌ Test failed!');
    console.error('Error:', error.message);
    console.error('\n🔍 Troubleshooting:');

    if (error.message.includes('authentication')) {
      console.error('→ Check your ODOO_USERNAME and ODOO_API_KEY');
      console.error('→ Make sure API Key is correctly copied (no extra spaces)');
      console.error('→ Verify your user has API access enabled');
    } else if (error.message.includes('connection')) {
      console.error('→ Check ODOO_URL is correct');
      console.error('→ Verify Odoo instance is accessible');
      console.error('→ Check your internet connection');
    } else if (error.message.includes('database')) {
      console.error('→ Check ODOO_DB name is correct');
      console.error('→ Verify database exists in your Odoo instance');
    } else if (error.message.includes('calendar')) {
      console.error('→ Make sure Calendar app is installed in Odoo');
      console.error('→ Go to Apps → Search "Calendar" → Install');
    } else {
      console.error('→ Full error details:', error);
    }
  }
}

testOdooConnection();