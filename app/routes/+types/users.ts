import type { LoaderFunctionArgs } from '@remix-run/router'
import type { User } from '@prisma/client'

export namespace Route {
  export type LoaderData = {
    users: User[]
  }

  export type LoaderArgs = LoaderFunctionArgs

  export type Handle = {
    [key: string]: unknown
  }
}