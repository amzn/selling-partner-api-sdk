<?php
/**
 * ServicesCapabilityTest
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
use OpenAPI\Client\Model\supplySources\ServicesCapability;

/**
 * ServicesCapabilityTest Class Doc Comment
 *
 * @category    Class
 * @description The services capability of a supply source.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\supplySources\OperationalConfiguration();
        
        $this->model->setOperationalConfiguration($testValue);
        $this->assertEquals($testValue, $this->model->getOperationalConfiguration());
    }
}
