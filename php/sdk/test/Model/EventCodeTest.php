<?php
/**
 * EventCodeTest
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
use OpenAPI\Client\Model\fulfillment\outbound\EventCode;

/**
 * EventCodeTest Class Doc Comment
 *
 * @category    Class
 * @description The event code for the delivery event.
 * @package     OpenAPI\Client
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
