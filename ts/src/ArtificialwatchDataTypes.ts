// Typed models for the ArtificialwatchData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface BenchIndex {
  attribution: string
  description: string
  generatedAt: string
  license: string
  method: string
  models: any[]
  name: string
  sources: any[]
  url: string
}

export interface BenchIndexListMatch {
  attribution?: string
  description?: string
  generatedAt?: string
  license?: string
  method?: string
  models?: any[]
  name?: string
  sources?: any[]
  url?: string
}

export interface CodingIndex {
  attribution: string
  description: string
  generatedAt: string
  license: string
  method: string
  models: any[]
  name: string
  sources: any[]
  url: string
}

export interface CodingIndexListMatch {
  attribution?: string
  description?: string
  generatedAt?: string
  license?: string
  method?: string
  models?: any[]
  name?: string
  sources?: any[]
  url?: string
}

export interface LeadTime {
  announced: string
  announcement_source: string
  announcement_url: string
  first_seen: string
  lab: string
  lead_minutes: number
  model: string
  note: string
  outcome: string
}

export interface LeadTimeListMatch {
  announced?: string
  announcement_source?: string
  announcement_url?: string
  first_seen?: string
  lab?: string
  lead_minutes?: number
  model?: string
  note?: string
  outcome?: string
}

export interface Wire {
}

export interface WireLoadMatch {

  // Selects a custom action instead of the plain load:
  //   'feed'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

