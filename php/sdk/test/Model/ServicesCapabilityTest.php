<?php
/**
 * ServicesCapabilityTest
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
use SpApi\Model\supplySources\v2020_07_01\ServicesCapability;

/**
 * ServicesCapabilityTest Class Doc Comment
 *
 * @category    Class
 * @description The services capability of a supply source.
 * @package     SpApi
 */
class ServicesCapabilityTest extends TestCase
{

    private ServicesCapability $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ServicesCapability();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ServicesCapability"
     */
    public function testServicesCapability()
    {
        $this->assertInstanceOf(ServicesCapability::class, $this->model);
    }

    /**
     * Test attribute "is_supported"
     */
    public function testPropertyIsSupported()
    {
        $testValue = true;
        
        $this->model->setIsSupported($testValue);
        $this->assertEquals($testValue, $this->model->getIsSupported());
    }

    /**
     * Test attribute "operational_configuration"
     */
    public function testPropertyOperationalConfiguration()
    {
        
        $testValue = new \SpApi\Model\supplySources\v2020_07_01\OperationalConfiguration();
        
        $this->model->setOperationalConfiguration($testValue);
        $this->assertEquals($testValue, $this->model->getOperationalConfiguration());
    }
}
