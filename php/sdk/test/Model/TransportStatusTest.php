<?php
/**
 * TransportStatusTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\TransportStatus;

/**
 * TransportStatusTest Class Doc Comment
 *
 * @category    Class
 * @description Indicates the status of the Amazon-partnered carrier shipment.
 * @package     OpenAPI\Client
 */
class TransportStatusTest extends TestCase
{

    private TransportStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransportStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransportStatus"
     */
    public function testTransportStatus()
    {
        $this->assertInstanceOf(TransportStatus::class, $this->model);
    }
}
