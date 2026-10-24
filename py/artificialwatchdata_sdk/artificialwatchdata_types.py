# Typed models for the ArtificialwatchData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class BenchIndex(TypedDict):
    attribution: str
    description: str
    generatedAt: str
    license: str
    method: str
    models: list
    name: str
    sources: list
    url: str


class BenchIndexListMatch(TypedDict, total=False):
    attribution: str
    description: str
    generatedAt: str
    license: str
    method: str
    models: list
    name: str
    sources: list
    url: str


class CodingIndex(TypedDict):
    attribution: str
    description: str
    generatedAt: str
    license: str
    method: str
    models: list
    name: str
    sources: list
    url: str


class CodingIndexListMatch(TypedDict, total=False):
    attribution: str
    description: str
    generatedAt: str
    license: str
    method: str
    models: list
    name: str
    sources: list
    url: str


class LeadTime(TypedDict):
    announced: str
    announcement_source: str
    announcement_url: str
    first_seen: str
    lab: str
    lead_minutes: float
    model: str
    note: str
    outcome: str


class LeadTimeListMatch(TypedDict, total=False):
    announced: str
    announcement_source: str
    announcement_url: str
    first_seen: str
    lab: str
    lead_minutes: float
    model: str
    note: str
    outcome: str


class Wire(TypedDict):
    pass


class WireLoadMatch(TypedDict):
    pass
