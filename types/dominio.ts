
export interface Address {
    street: string
    neighborhood: string
    city: string
    state: string
    zipCode: string
}

export interface ContactInfo {
    email: string
    whatsapp: string
    phone: string
    cnpj: string
    address: Address
}

export interface SiteInfo {
    name: string
}

export interface SiteConfig {
    siteInfo: SiteInfo
    contactInfo: ContactInfo
}

export interface DomainConfigs {
    [key: string]: SiteConfig
}
