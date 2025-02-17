<?php
/**
 * CarrierCodeTypeTest
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
use SpApi\Model\awd\v2024_05_09\CarrierCodeType;

/**
 * CarrierCodeTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Denotes the type for the carrier.
 * @package     SpApi
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
