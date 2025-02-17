<?php
/**
 * ServiceLocationTest
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
use SpApi\Model\services\v1\ServiceLocation;

/**
 * ServiceLocationTest Class Doc Comment
 *
 * @category    Class
 * @description Information about the location of the service job.
 * @package     SpApi
 */
class ServiceLocationTest extends TestCase
{

    private ServiceLocation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ServiceLocation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ServiceLocation"
     */
    public function testServiceLocation()
    {
        $this->assertInstanceOf(ServiceLocation::class, $this->model);
    }

    /**
     * Test attribute "service_location_type"
     */
    public function testPropertyServiceLocationType()
    {
        $enumInstance = new ServiceLocation();
        $allowedValues = $enumInstance->getServiceLocationTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setServiceLocationType($testValue);
        $this->assertEquals($testValue, $this->model->getServiceLocationType());
    }

    /**
     * Test attribute "address"
     */
    public function testPropertyAddress()
    {
        
        $testValue = new \SpApi\Model\services\v1\Address();
        
        $this->model->setAddress($testValue);
        $this->assertEquals($testValue, $this->model->getAddress());
    }
}
