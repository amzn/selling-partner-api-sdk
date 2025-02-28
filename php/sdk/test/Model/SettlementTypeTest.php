<?php
/**
 * SettlementTypeTest
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
use SpApi\Model\shipping\v2\SettlementType;

/**
 * SettlementTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Type of settlement the shipper wants to receive for a particular shipment.
 * @package     SpApi
 */
class SettlementTypeTest extends TestCase
{

    private SettlementType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SettlementType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SettlementType"
     */
    public function testSettlementType()
    {
        $this->assertInstanceOf(SettlementType::class, $this->model);
    }
}
