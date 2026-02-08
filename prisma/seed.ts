import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('Admin@00321', 10);
  
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@taxpraxis.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@taxpraxis.com',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  console.log('✅ Created admin user:', adminUser.email);

  // Create staff user
  const staffUser = await prisma.user.upsert({
    where: { email: 'staff@taxpraxis.com' },
    update: {},
    create: {
      name: 'Staff User',
      email: 'staff@taxpraxis.com',
      password: await bcrypt.hash('staff123', 10),
      role: 'STAFF',
    },
  });

  console.log('✅ Created staff user:', staffUser.email);

  // Create sample availabilities for the next 7 days
  const today = new Date();
  const availabilities = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    date.setHours(0, 0, 0, 0);

    // Skip weekends
    if (date.getDay() === 0 || date.getDay() === 6) continue;

    const availability = await prisma.availability.create({
      data: {
        userId: adminUser.id,
        date: date,
        startAt: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 9, 0),
        endAt: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 17, 0),
      },
    });

    availabilities.push(availability);

    // Create time slots (9 AM to 5 PM, 1-hour slots)
    for (let hour = 9; hour < 17; hour++) {
      const startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hour, 0);
      const endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hour + 1, 0);

      await prisma.timeSlot.create({
        data: {
          availabilityId: availability.id,
          startTime,
          endTime,
          isBooked: false,
        },
      });
    }

    console.log(`✅ Created availability for ${date.toDateString()}`);
  }

  // Create a sample booking
  if (availabilities.length > 0) {
    const firstAvailability = availabilities[0];
    const firstSlot = await prisma.timeSlot.findFirst({
      where: {
        availabilityId: firstAvailability.id,
        isBooked: false,
      },
    });

    if (firstSlot) {
      const booking = await prisma.booking.create({
        data: {
          fullName: 'John Doe',
          email: 'john.doe@example.com',
          phone: '+1234567890',
          notes: 'Need help with tax filing',
          slotId: firstSlot.id,
          timezone: 'America/New_York',
          status: 'CONFIRMED',
          userId: adminUser.id,
        },
      });

      await prisma.timeSlot.update({
        where: { id: firstSlot.id },
        data: { isBooked: true },
      });

      // Create audit log
      await prisma.auditLog.create({
        data: {
          action: 'CREATE',
          entity: 'Booking',
          entityId: booking.id,
          userId: adminUser.id,
          meta: {
            fullName: booking.fullName,
            email: booking.email,
            status: booking.status,
          },
        },
      });

      console.log('✅ Created sample booking');
    }
  }

  // Create sample audit logs
  await prisma.auditLog.create({
    data: {
      action: 'CREATE',
      entity: 'User',
      entityId: adminUser.id,
      userId: adminUser.id,
      meta: {
        name: adminUser.name,
        email: adminUser.email,
        role: adminUser.role,
      },
    },
  });

  await prisma.auditLog.create({
    data: {
      action: 'CREATE',
      entity: 'User',
      entityId: staffUser.id,
      userId: adminUser.id,
      meta: {
        name: staffUser.name,
        email: staffUser.email,
        role: staffUser.role,
      },
    },
  });

  console.log('✅ Created audit logs');

  console.log('');
  console.log('🎉 Database seeded successfully!');
  console.log('');
  console.log('📝 Login Credentials:');
  console.log('   Admin: admin@taxpraxis.com / admin123');
  console.log('   Staff: staff@taxpraxis.com / staff123');
  console.log('');
  console.log('🚀 Start the dev server: npm run dev');
  console.log('🌐 Visit: http://localhost:3000/login');
  console.log('');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });