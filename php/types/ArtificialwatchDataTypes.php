<?php
declare(strict_types=1);

// Typed models for the ArtificialwatchData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** BenchIndex entity data model. */
class BenchIndex
{
    public string $attribution;
    public string $description;
    public string $generatedAt;
    public string $license;
    public string $method;
    public array $models;
    public string $name;
    public array $sources;
    public string $url;
}

/** Request payload for BenchIndex#list. */
class BenchIndexListMatch
{
    public ?string $attribution = null;
    public ?string $description = null;
    public ?string $generatedAt = null;
    public ?string $license = null;
    public ?string $method = null;
    public ?array $models = null;
    public ?string $name = null;
    public ?array $sources = null;
    public ?string $url = null;
}

/** CodingIndex entity data model. */
class CodingIndex
{
    public string $attribution;
    public string $description;
    public string $generatedAt;
    public string $license;
    public string $method;
    public array $models;
    public string $name;
    public array $sources;
    public string $url;
}

/** Request payload for CodingIndex#list. */
class CodingIndexListMatch
{
    public ?string $attribution = null;
    public ?string $description = null;
    public ?string $generatedAt = null;
    public ?string $license = null;
    public ?string $method = null;
    public ?array $models = null;
    public ?string $name = null;
    public ?array $sources = null;
    public ?string $url = null;
}

/** LeadTime entity data model. */
class LeadTime
{
    public string $announced;
    public string $announcement_source;
    public string $announcement_url;
    public string $first_seen;
    public string $lab;
    public float $lead_minutes;
    public string $model;
    public string $note;
    public string $outcome;
}

/** Request payload for LeadTime#list. */
class LeadTimeListMatch
{
    public ?string $announced = null;
    public ?string $announcement_source = null;
    public ?string $announcement_url = null;
    public ?string $first_seen = null;
    public ?string $lab = null;
    public ?float $lead_minutes = null;
    public ?string $model = null;
    public ?string $note = null;
    public ?string $outcome = null;
}

/** Wire entity data model. */
class Wire
{
}

/** Request payload for Wire#load. */
class WireLoadMatch
{
}

