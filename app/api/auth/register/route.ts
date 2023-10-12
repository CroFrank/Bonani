import { sql } from '@vercel/postgres'
import { hash } from 'bcrypt'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()
    // later I will add Zod validation
    const hashedPassword = await hash(password, 10)
    const response = await sql`
        INSERT INTO users (name, email, password)
        VALUES (${name}, ${email}, ${hashedPassword})
        `
  } catch (e) {
    console.log('error', e)
  }
  return NextResponse.json({ message: 'success' })
}
