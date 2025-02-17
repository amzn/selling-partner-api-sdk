<?php
/**
 * DeliveryWindowOptionTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\DeliveryWindowOption;

/**
 * DeliveryWindowOptionTest Class Doc Comment
 *
 * @category    Class
 * @description Contains information pertaining to a delivery window option.
 * @package     SpApi
 */
class DeliveryWindowOptionTest extends TestCase
{

    private DeliveryWindowOption $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DeliveryWindowOption();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DeliveryWindowOption"
     */
    public function testDeliveryWindowOption()
    {
        $this->assertInstanceOf(DeliveryWindowOption::class, $this->model);
    }

    /**
     * Test attribute "availability_type"
     */
    public function testPropertyAvailabilityType()
    {
        $testValue = 'test';
        
        $this->model->setAvailabilityType($testValue);
        $this->assertEquals($testValue, $this->model->getAvailabilityType());
    }

    /**
     * Test attribute "delivery_window_option_id"
     */
    public function testPropertyDeliveryWindowOptionId()
    {
        $testValue = 'test';
        
        $this->model->setDeliveryWindowOptionId($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryWindowOptionId());
    }

    /**
     * Test attribute "end_date"
     */
    public function testPropertyEndDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEndDate($testValue);
        $this->assertEquals($testValue, $this->model->getEndDate());
    }

    /**
     * Test attribute "start_date"
     */
    public function testPropertyStartDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setStartDate($testValue);
        $this->assertEquals($testValue, $this->model->getStartDate());
    }

    /**
     * Test attribute "valid_until"
     */
    public function testPropertyValidUntil()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setValidUntil($testValue);
        $this->assertEquals($testValue, $this->model->getValidUntil());
    }
}
