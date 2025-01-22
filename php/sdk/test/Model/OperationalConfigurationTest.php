<?php
/**
 * OperationalConfigurationTest
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
use OpenAPI\Client\Model\supplySources\OperationalConfiguration;

/**
 * OperationalConfigurationTest Class Doc Comment
 *
 * @category    Class
 * @description The operational configuration of &#x60;supplySources&#x60;.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\supplySources\ContactDetails();
        
        $this->model->setContactDetails($testValue);
        $this->assertEquals($testValue, $this->model->getContactDetails());
    }

    /**
     * Test attribute "throughput_config"
     */
    public function testPropertyThroughputConfig()
    {
        
        $testValue = new \OpenAPI\Client\Model\supplySources\ThroughputConfig();
        
        $this->model->setThroughputConfig($testValue);
        $this->assertEquals($testValue, $this->model->getThroughputConfig());
    }

    /**
     * Test attribute "operating_hours_by_day"
     */
    public function testPropertyOperatingHoursByDay()
    {
        
        $testValue = new \OpenAPI\Client\Model\supplySources\OperatingHoursByDay();
        
        $this->model->setOperatingHoursByDay($testValue);
        $this->assertEquals($testValue, $this->model->getOperatingHoursByDay());
    }

    /**
     * Test attribute "handling_time"
     */
    public function testPropertyHandlingTime()
    {
        
        $testValue = new \OpenAPI\Client\Model\supplySources\Duration();
        
        $this->model->setHandlingTime($testValue);
        $this->assertEquals($testValue, $this->model->getHandlingTime());
    }
}
