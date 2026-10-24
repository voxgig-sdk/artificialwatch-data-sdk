<?php
declare(strict_types=1);

// ArtificialwatchData SDK utility: result_headers

class ArtificialwatchDataResultHeaders
{
    public static function call(ArtificialwatchDataContext $ctx): ?ArtificialwatchDataResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
