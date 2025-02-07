<?php
/**
 * SupplySourceCapabilitiesTest
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
use OpenAPI\Client\Model\supplySources\v2020_07_01\SupplySourceCapabilities;

/**
 * SupplySourceCapabilitiesTest Class Doc Comment
 *
 * @category    Class
 * @description The capabilities of a supply source.
 * @package     OpenAPI\Client
 */
class SupplySourceCapabilitiesTest extends TestCase
{

    private SupplySourceCapabilities $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SupplySourceCapabilities();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SupplySourceCapabilities"
     */
    public function testSupplySourceCapabilities()
    {
        $this->assertInstanceOf(SupplySourceCapabilities::class, $this->model);
    }

    /**
     * Test attribute "outbound"
     */
    public function testPropertyOutbound()
    {
        
        $testValue = new \OpenAPI\Client\Model\supplySources\v2020_07_01\OutboundCapability();
        
        $this->model->setOutbound($testValue);
        $this->assertEquals($testValue, $this->model->getOutbound());
    }

    /**
     * Test attribute "services"
     */
    public function testPropertyServices()
    {
        
        $testValue = new \OpenAPI\Client\Model\supplySources\v2020_07_01\ServicesCapability();
        
        $this->model->setServices($testValue);
        $this->assertEquals($testValue, $this->model->getServices());
    }
}
