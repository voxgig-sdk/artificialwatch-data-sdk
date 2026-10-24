// Typed models for the ArtificialwatchData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/artificialwatch-data-sdk/go/core"
)

// BenchIndex is the typed data model for the bench_index entity.
type BenchIndex struct {
}

// BenchIndexListMatch is the typed request payload for BenchIndex.ListTyped.
type BenchIndexListMatch struct {
	Attribution *string `json:"attribution,omitempty"`
	Description *string `json:"description,omitempty"`
	GeneratedAt *string `json:"generatedAt,omitempty"`
	License *string `json:"license,omitempty"`
	Method *string `json:"method,omitempty"`
	Models *[]any `json:"models,omitempty"`
	Name *string `json:"name,omitempty"`
	Sources *[]any `json:"sources,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CodingIndex is the typed data model for the coding_index entity.
type CodingIndex struct {
}

// CodingIndexListMatch is the typed request payload for CodingIndex.ListTyped.
type CodingIndexListMatch struct {
	Attribution *string `json:"attribution,omitempty"`
	Description *string `json:"description,omitempty"`
	GeneratedAt *string `json:"generatedAt,omitempty"`
	License *string `json:"license,omitempty"`
	Method *string `json:"method,omitempty"`
	Models *[]any `json:"models,omitempty"`
	Name *string `json:"name,omitempty"`
	Sources *[]any `json:"sources,omitempty"`
	Url *string `json:"url,omitempty"`
}

// LeadTime is the typed data model for the lead_time entity.
type LeadTime struct {
}

// LeadTimeListMatch is the typed request payload for LeadTime.ListTyped.
type LeadTimeListMatch struct {
	Announced *string `json:"announced,omitempty"`
	AnnouncementSource *string `json:"announcement_source,omitempty"`
	AnnouncementUrl *string `json:"announcement_url,omitempty"`
	FirstSeen *string `json:"first_seen,omitempty"`
	Lab *string `json:"lab,omitempty"`
	LeadMinutes *float64 `json:"lead_minutes,omitempty"`
	Model *string `json:"model,omitempty"`
	Note *string `json:"note,omitempty"`
	Outcome *string `json:"outcome,omitempty"`
}

// Wire is the typed data model for the wire entity.
type Wire struct {
}

// WireLoadMatch is the typed request payload for Wire.LoadTyped.
type WireLoadMatch struct {
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
