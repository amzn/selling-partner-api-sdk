<?php
/**
 * OperationalConfigurationTest
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
use SpApi\Model\supplySources\v2020_07_01\OperationalConfiguration;

/**
 * OperationalConfigurationTest Class Doc Comment
 *
 * @category    Class
 * @description The operational configuration of &#x60;supplySources&#x60;.
 * @package     SpApi
 */
class OperationalConfigurationTest extends TestCase
{

    private OperationalConfiguration $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OperationalConfiguration();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OperationalConfiguration"
     */
    public function testOperationalConfiguration()
    {
        $this->assertInstanceOf(OperationalConfiguration::class, $this->model);
    }

    /**
     * Test attribute "contact_details"
     */
    public function testPropertyContactDetails()
    {
        
        $testValue = new \SpApi\Model\supplySources\v2020_07_01\ContactDetails();
        
        $this->model->setContactDetails($testValue);
        $this->assertEquals($testValue, $this->model->getContactDetails());
    }

    /**
     * Test attribute "throughput_config"
     */
    public function testPropertyThroughputConfig()
    {
        
        $testValue = new \SpApi\Model\supplySources\v2020_07_01\ThroughputConfig();
        
        $this->model->setThroughputConfig($testValue);
        $this->assertEquals($testValue, $this->model->getThroughputConfig());
    }

    /**
     * Test attribute "operating_hours_by_day"
     */
    public function testPropertyOperatingHoursByDay()
    {
        
        $testValue = new \SpApi\Model\supplySources\v2020_07_01\OperatingHoursByDay();
        
        $this->model->setOperatingHoursByDay($testValue);
        $this->assertEquals($testValue, $this->model->getOperatingHoursByDay());
    }

    /**
     * Test attribute "handling_time"
     */
    public function testPropertyHandlingTime()
    {
        
        $testValue = new \SpApi\Model\supplySources\v2020_07_01\Duration();
        
        $this->model->setHandlingTime($testValue);
        $this->assertEquals($testValue, $this->model->getHandlingTime());
    }
}
