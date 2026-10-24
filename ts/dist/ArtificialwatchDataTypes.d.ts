export interface BenchIndex {
    attribution: string;
    description: string;
    generatedAt: string;
    license: string;
    method: string;
    models: any[];
    name: string;
    sources: any[];
    url: string;
}
export interface BenchIndexListMatch {
    attribution?: string;
    description?: string;
    generatedAt?: string;
    license?: string;
    method?: string;
    models?: any[];
    name?: string;
    sources?: any[];
    url?: string;
}
export interface CodingIndex {
    attribution: string;
    description: string;
    generatedAt: string;
    license: string;
    method: string;
    models: any[];
    name: string;
    sources: any[];
    url: string;
}
export interface CodingIndexListMatch {
    attribution?: string;
    description?: string;
    generatedAt?: string;
    license?: string;
    method?: string;
    models?: any[];
    name?: string;
    sources?: any[];
    url?: string;
}
export interface LeadTime {
    announced: string;
    announcement_source: string;
    announcement_url: string;
    first_seen: string;
    lab: string;
    lead_minutes: number;
    model: string;
    note: string;
    outcome: string;
}
export interface LeadTimeListMatch {
    announced?: string;
    announcement_source?: string;
    announcement_url?: string;
    first_seen?: string;
    lab?: string;
    lead_minutes?: number;
    model?: string;
    note?: string;
    outcome?: string;
}
export interface Wire {
}
export interface WireLoadMatch {
    $action?: string;
    [action: string]: any;
}
