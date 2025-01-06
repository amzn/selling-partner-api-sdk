<?php
/**
 * ShippingConfigurationTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillmentInbound\ShippingConfiguration;

/**
 * ShippingConfigurationTest Class Doc Comment
 *
 * @category    Class
 * @description The shipping configurations supported for the packing option. Available modes are ground small parcel, freight less-than-truckload (LTL), freight full-truckload (FTL) palletized, freight FTL non-palletized, ocean less-than-container-load (LCL), ocean full-container load (FCL), air small parcel, and air small parcel express.
 * @package     OpenAPI\Client
 */
class ShippingConfigurationTest extends TestCase
{

    private ShippingConfiguration $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShippingConfiguration();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShippingConfiguration"
     */
    public function testShippingConfiguration()
    {
        $this->assertInstanceOf(ShippingConfiguration::class, $this->model);
    }

    /**
     * Test attribute "shipping_mode"
     */
    public function testPropertyShippingMode()
    {
        $testValue = 'test';
        
        $this->model->setShippingMode($testValue);
        $this->assertEquals($testValue, $this->model->getShippingMode());
    }

    /**
     * Test attribute "shipping_solution"
     */
    public function testPropertyShippingSolution()
    {
        $testValue = 'test';
        
        $this->model->setShippingSolution($testValue);
        $this->assertEquals($testValue, $this->model->getShippingSolution());
    }
}
