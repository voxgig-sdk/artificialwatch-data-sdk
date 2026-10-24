<?php
declare(strict_types=1);

// ArtificialwatchData SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ArtificialwatchDataMakeContext
{
    public static function call(array $ctxmap, ?ArtificialwatchDataContext $basectx): ArtificialwatchDataContext
    {
        return new ArtificialwatchDataContext($ctxmap, $basectx);
    }
}
