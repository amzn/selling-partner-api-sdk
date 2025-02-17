<?php
/**
 * IneligibleRateTest
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
use SpApi\Model\shipping\v2\IneligibleRate;

/**
 * IneligibleRateTest Class Doc Comment
 *
 * @category    Class
 * @description Detailed information for an ineligible shipping service offering.
 * @package     SpApi
 */
class IneligibleRateTest extends TestCase
{

    private IneligibleRate $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new IneligibleRate();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "IneligibleRate"
     */
    public function testIneligibleRate()
    {
        $this->assertInstanceOf(IneligibleRate::class, $this->model);
    }

    /**
     * Test attribute "service_id"
     */
    public function testPropertyServiceId()
    {
        $testValue = 'test';
        
        $this->model->setServiceId($testValue);
        $this->assertEquals($testValue, $this->model->getServiceId());
    }

    /**
     * Test attribute "service_name"
     */
    public function testPropertyServiceName()
    {
        $testValue = 'test';
        
        $this->model->setServiceName($testValue);
        $this->assertEquals($testValue, $this->model->getServiceName());
    }

    /**
     * Test attribute "carrier_name"
     */
    public function testPropertyCarrierName()
    {
        $testValue = 'test';
        
        $this->model->setCarrierName($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierName());
    }

    /**
     * Test attribute "carrier_id"
     */
    public function testPropertyCarrierId()
    {
        $testValue = 'test';
        
        $this->model->setCarrierId($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierId());
    }

    /**
     * Test attribute "ineligibility_reasons"
     */
    public function testPropertyIneligibilityReasons()
    {
        $testValue = [];
        
        $this->model->setIneligibilityReasons($testValue);
        $this->assertEquals($testValue, $this->model->getIneligibilityReasons());
    }
}
