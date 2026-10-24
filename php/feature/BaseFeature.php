<?php
declare(strict_types=1);

// ArtificialwatchData SDK base feature

class ArtificialwatchDataBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ArtificialwatchDataContext $ctx, array $options): void {}
    public function PostConstruct(ArtificialwatchDataContext $ctx): void {}
    public function PostConstructEntity(ArtificialwatchDataContext $ctx): void {}
    public function SetData(ArtificialwatchDataContext $ctx): void {}
    public function GetData(ArtificialwatchDataContext $ctx): void {}
    public function GetMatch(ArtificialwatchDataContext $ctx): void {}
    public function SetMatch(ArtificialwatchDataContext $ctx): void {}
    public function PrePoint(ArtificialwatchDataContext $ctx): void {}
    public function PreSpec(ArtificialwatchDataContext $ctx): void {}
    public function PreRequest(ArtificialwatchDataContext $ctx): void {}
    public function PreResponse(ArtificialwatchDataContext $ctx): void {}
    public function PreResult(ArtificialwatchDataContext $ctx): void {}
    public function PreDone(ArtificialwatchDataContext $ctx): void {}
    public function PreUnexpected(ArtificialwatchDataContext $ctx): void {}
}
