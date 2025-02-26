<?php
/**
 * InboundStatusTest
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
use SpApi\Model\awd\v2024_05_09\InboundStatus;

/**
 * InboundStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The supported statuses for an inbound order.
 * @package     SpApi
 */
class InboundStatusTest extends TestCase
{

    private InboundStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundStatus"
     */
    public function testInboundStatus()
    {
        $this->assertInstanceOf(InboundStatus::class, $this->model);
    }
}
