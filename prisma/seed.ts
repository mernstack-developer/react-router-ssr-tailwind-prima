import { PrismaClient } from '@prisma/client'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const prisma = new PrismaClient()

async function main() {
  try {
    // Clear existing data
    await prisma.user.deleteMany({})

    // Create dummy users
    const users = [
      {
        email: 'john@example.com',
        name: 'John Doe',
      },
      {
        email: 'jane@example.com',
        name: 'Jane Smith',
      },
      {
        email: 'bob@example.com',
        name: 'Bob Johnson',
      },
      {
        email: 'alice@example.com',
        name: 'Alice Williams',
      },
    ]

    for (const user of users) {
      await prisma.user.create({
        data: user,
      })
    }

    console.log('Seed data created successfully')
  } catch (error) {
    console.error('Error seeding database:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })