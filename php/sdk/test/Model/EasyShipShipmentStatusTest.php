<?php
/**
 * EasyShipShipmentStatusTest
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
use SpApi\Model\orders\v0\EasyShipShipmentStatus;

/**
 * EasyShipShipmentStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The status of the Amazon Easy Ship order. This property is only included for Amazon Easy Ship orders.
 * @package     SpApi
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
