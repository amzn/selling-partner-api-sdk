<?php
/**
 * ClaimReasonTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\shipping\v2\ClaimReason;

/**
 * ClaimReasonTest Class Doc Comment
 *
 * @category    Class
 * @description The reason for which shipper is filing the claim for a particular shipment.
 * @package     SpApi
 */
class ClaimReasonTest extends TestCase
{

    private ClaimReason $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ClaimReason();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ClaimReason"
     */
    public function testClaimReason()
    {
        $this->assertInstanceOf(ClaimReason::class, $this->model);
    }
}
