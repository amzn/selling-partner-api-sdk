<?php
/**
 * CarrierCodeTypeTest
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
use OpenAPI\Client\Model\awd\CarrierCodeType;

/**
 * CarrierCodeTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Denotes the type for the carrier.
 * @package     OpenAPI\Client
 */
class CarrierCodeTypeTest extends TestCase
{

    private CarrierCodeType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CarrierCodeType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CarrierCodeType"
     */
    public function testCarrierCodeType()
    {
        $this->assertInstanceOf(CarrierCodeType::class, $this->model);
    }
}
