<?php
/**
 * CarrierCodeTest
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
use SpApi\Model\awd\v2024_05_09\CarrierCode;

/**
 * CarrierCodeTest Class Doc Comment
 *
 * @category    Class
 * @description Identifies the carrier that will deliver the shipment.
 * @package     SpApi
 */
class CarrierCodeTest extends TestCase
{

    private CarrierCode $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CarrierCode();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CarrierCode"
     */
    public function testCarrierCode()
    {
        $this->assertInstanceOf(CarrierCode::class, $this->model);
    }

    /**
     * Test attribute "carrier_code_type"
     */
    public function testPropertyCarrierCodeType()
    {
        $enumInstance = new \SpApi\Model\awd\v2024_05_09\CarrierCodeType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setCarrierCodeType($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierCodeType());
    }

    /**
     * Test attribute "carrier_code_value"
     */
    public function testPropertyCarrierCodeValue()
    {
        $testValue = 'test';
        
        $this->model->setCarrierCodeValue($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierCodeValue());
    }
}
