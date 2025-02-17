<?php
/**
 * DetailedShippingTimeTypeTest
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
use SpApi\Model\pricing\v0\DetailedShippingTimeType;

/**
 * DetailedShippingTimeTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The time range in which an item will likely be shipped once an order has been placed.
 * @package     SpApi
 */
class DetailedShippingTimeTypeTest extends TestCase
{

    private DetailedShippingTimeType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DetailedShippingTimeType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DetailedShippingTimeType"
     */
    public function testDetailedShippingTimeType()
    {
        $this->assertInstanceOf(DetailedShippingTimeType::class, $this->model);
    }

    /**
     * Test attribute "minimum_hours"
     */
    public function testPropertyMinimumHours()
    {
        
        $testValue = new int();
        
        $this->model->setMinimumHours($testValue);
        $this->assertEquals($testValue, $this->model->getMinimumHours());
    }

    /**
     * Test attribute "maximum_hours"
     */
    public function testPropertyMaximumHours()
    {
        
        $testValue = new int();
        
        $this->model->setMaximumHours($testValue);
        $this->assertEquals($testValue, $this->model->getMaximumHours());
    }

    /**
     * Test attribute "available_date"
     */
    public function testPropertyAvailableDate()
    {
        $testValue = 'test';
        
        $this->model->setAvailableDate($testValue);
        $this->assertEquals($testValue, $this->model->getAvailableDate());
    }

    /**
     * Test attribute "availability_type"
     */
    public function testPropertyAvailabilityType()
    {
        $enumInstance = new DetailedShippingTimeType();
        $allowedValues = $enumInstance->getAvailabilityTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setAvailabilityType($testValue);
        $this->assertEquals($testValue, $this->model->getAvailabilityType());
    }
}
