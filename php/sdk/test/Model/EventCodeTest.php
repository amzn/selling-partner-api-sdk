<?php
/**
 * EventCodeTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\EventCode;

/**
 * EventCodeTest Class Doc Comment
 *
 * @category    Class
 * @description The event code for the delivery event.
 * @package     SpApi
 */
class EventCodeTest extends TestCase
{

    private EventCode $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new EventCode();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "EventCode"
     */
    public function testEventCode()
    {
        $this->assertInstanceOf(EventCode::class, $this->model);
    }
}
