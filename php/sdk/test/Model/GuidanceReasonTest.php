<?php
/**
 * GuidanceReasonTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillment\inbound\v0\GuidanceReason;

/**
 * GuidanceReasonTest Class Doc Comment
 *
 * @category    Class
 * @description A reason for the current inbound guidance for an item.
 * @package     OpenAPI\Client
 */
class GuidanceReasonTest extends TestCase
{

    private GuidanceReason $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GuidanceReason();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GuidanceReason"
     */
    public function testGuidanceReason()
    {
        $this->assertInstanceOf(GuidanceReason::class, $this->model);
    }
}
