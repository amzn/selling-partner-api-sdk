<?php
/**
 * EasyShipShipmentStatusTest
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
use OpenAPI\Client\Model\orders\EasyShipShipmentStatus;

/**
 * EasyShipShipmentStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The status of the Amazon Easy Ship order. This property is only included for Amazon Easy Ship orders.
 * @package     OpenAPI\Client
 */
class EasyShipShipmentStatusTest extends TestCase
{

    private EasyShipShipmentStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new EasyShipShipmentStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "EasyShipShipmentStatus"
     */
    public function testEasyShipShipmentStatus()
    {
        $this->assertInstanceOf(EasyShipShipmentStatus::class, $this->model);
    }
}
