import { prisma } from '../lib/prisma'
import { useLoaderData } from 'react-router'
import type { Route } from './+types/users'

export async function loader({}: Route.LoaderArgs) {
  const users = await prisma.user.findMany()
  return { users }
}

export default function Users() {
  const { users } = useLoaderData<Route.LoaderData>()
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="border p-2 rounded">
            <p className="font-medium">{user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}