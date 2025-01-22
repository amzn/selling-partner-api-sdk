<?php
/**
 * InboundGuidanceTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\InboundGuidance;

/**
 * InboundGuidanceTest Class Doc Comment
 *
 * @category    Class
 * @description Specific inbound guidance for an item.
 * @package     OpenAPI\Client
 */
class InboundGuidanceTest extends TestCase
{

    private InboundGuidance $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundGuidance();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundGuidance"
     */
    public function testInboundGuidance()
    {
        $this->assertInstanceOf(InboundGuidance::class, $this->model);
    }
}
