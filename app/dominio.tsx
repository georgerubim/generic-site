import { domainConfigs } from "@/config/dominio-config"
import { SiteConfig } from "@/types/dominio"
import { headers } from "next/headers"

function extractMainDomain(host: string): string {
    // Remove porta se existir
    const hostWithoutPort = host.split(':')[0]
    
    // Remove www. se existir
    const withoutWww = hostWithoutPort.replace(/^www\./, '')
    
    // Se for localhost, retorna como está
    if (withoutWww === 'localhost') {
        return withoutWww
    }
    
    // Para outros domínios, pega apenas o domínio principal
    const parts = withoutWww.split('.')
    if (parts.length > 2) {
        return parts.slice(-2).join('.')
    }
    
    return withoutWww
}

export async function getCurrentDomain() {
    const headersList = await headers()
    const host = headersList.get('host') || ''
    return extractMainDomain(host)
}

export async function getSiteConfig(): Promise<SiteConfig> {
    const currentDomain = await getCurrentDomain()
    return domainConfigs[currentDomain] || domainConfigs["dominio.com"]
}

