<?php
declare(strict_types=1);

// ArtificialwatchData SDK utility: feature_hook

class ArtificialwatchDataFeatureHook
{
    public static function call(ArtificialwatchDataContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
