# frozen_string_literal: true

# Typed models for the ArtificialwatchData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# BenchIndex entity data model.
#
# @!attribute [rw] attribution
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] generatedAt
#   @return [String]
#
# @!attribute [rw] license
#   @return [String]
#
# @!attribute [rw] method
#   @return [String]
#
# @!attribute [rw] models
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] sources
#   @return [Array]
#
# @!attribute [rw] url
#   @return [String]
BenchIndex = Struct.new(
  :attribution,
  :description,
  :generatedAt,
  :license,
  :method,
  :models,
  :name,
  :sources,
  :url,
  keyword_init: true
)

# Request payload for BenchIndex#list.
#
# @!attribute [rw] attribution
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] generatedAt
#   @return [String, nil]
#
# @!attribute [rw] license
#   @return [String, nil]
#
# @!attribute [rw] method
#   @return [String, nil]
#
# @!attribute [rw] models
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] sources
#   @return [Array, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
BenchIndexListMatch = Struct.new(
  :attribution,
  :description,
  :generatedAt,
  :license,
  :method,
  :models,
  :name,
  :sources,
  :url,
  keyword_init: true
)

# CodingIndex entity data model.
#
# @!attribute [rw] attribution
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] generatedAt
#   @return [String]
#
# @!attribute [rw] license
#   @return [String]
#
# @!attribute [rw] method
#   @return [String]
#
# @!attribute [rw] models
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] sources
#   @return [Array]
#
# @!attribute [rw] url
#   @return [String]
CodingIndex = Struct.new(
  :attribution,
  :description,
  :generatedAt,
  :license,
  :method,
  :models,
  :name,
  :sources,
  :url,
  keyword_init: true
)

# Request payload for CodingIndex#list.
#
# @!attribute [rw] attribution
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] generatedAt
#   @return [String, nil]
#
# @!attribute [rw] license
#   @return [String, nil]
#
# @!attribute [rw] method
#   @return [String, nil]
#
# @!attribute [rw] models
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] sources
#   @return [Array, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
CodingIndexListMatch = Struct.new(
  :attribution,
  :description,
  :generatedAt,
  :license,
  :method,
  :models,
  :name,
  :sources,
  :url,
  keyword_init: true
)

# LeadTime entity data model.
#
# @!attribute [rw] announced
#   @return [String]
#
# @!attribute [rw] announcement_source
#   @return [String]
#
# @!attribute [rw] announcement_url
#   @return [String]
#
# @!attribute [rw] first_seen
#   @return [String]
#
# @!attribute [rw] lab
#   @return [String]
#
# @!attribute [rw] lead_minutes
#   @return [Float]
#
# @!attribute [rw] model
#   @return [String]
#
# @!attribute [rw] note
#   @return [String]
#
# @!attribute [rw] outcome
#   @return [String]
LeadTime = Struct.new(
  :announced,
  :announcement_source,
  :announcement_url,
  :first_seen,
  :lab,
  :lead_minutes,
  :model,
  :note,
  :outcome,
  keyword_init: true
)

# Request payload for LeadTime#list.
#
# @!attribute [rw] announced
#   @return [String, nil]
#
# @!attribute [rw] announcement_source
#   @return [String, nil]
#
# @!attribute [rw] announcement_url
#   @return [String, nil]
#
# @!attribute [rw] first_seen
#   @return [String, nil]
#
# @!attribute [rw] lab
#   @return [String, nil]
#
# @!attribute [rw] lead_minutes
#   @return [Float, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] note
#   @return [String, nil]
#
# @!attribute [rw] outcome
#   @return [String, nil]
LeadTimeListMatch = Struct.new(
  :announced,
  :announcement_source,
  :announcement_url,
  :first_seen,
  :lab,
  :lead_minutes,
  :model,
  :note,
  :outcome,
  keyword_init: true
)

# Wire entity data model.
class Wire
end

# Request payload for Wire#load.
class WireLoadMatch
end

