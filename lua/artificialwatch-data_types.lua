-- Typed models for the ArtificialwatchData SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class BenchIndex
---@field attribution string
---@field description string
---@field generatedAt string
---@field license string
---@field method string
---@field models table
---@field name string
---@field sources table
---@field url string

---@class BenchIndexListMatch
---@field attribution? string
---@field description? string
---@field generatedAt? string
---@field license? string
---@field method? string
---@field models? table
---@field name? string
---@field sources? table
---@field url? string

---@class CodingIndex
---@field attribution string
---@field description string
---@field generatedAt string
---@field license string
---@field method string
---@field models table
---@field name string
---@field sources table
---@field url string

---@class CodingIndexListMatch
---@field attribution? string
---@field description? string
---@field generatedAt? string
---@field license? string
---@field method? string
---@field models? table
---@field name? string
---@field sources? table
---@field url? string

---@class LeadTime
---@field announced string
---@field announcement_source string
---@field announcement_url string
---@field first_seen string
---@field lab string
---@field lead_minutes number
---@field model string
---@field note string
---@field outcome string

---@class LeadTimeListMatch
---@field announced? string
---@field announcement_source? string
---@field announcement_url? string
---@field first_seen? string
---@field lab? string
---@field lead_minutes? number
---@field model? string
---@field note? string
---@field outcome? string

---@class Wire

---@class WireLoadMatch

local M = {}

return M
