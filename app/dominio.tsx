import { headers } from "next/headers"

export async function getCurrentDomain() {
    const headersList = await headers()
    const currentDomain = headersList.get('host') || ''
    return currentDomain
  }
  
  
  