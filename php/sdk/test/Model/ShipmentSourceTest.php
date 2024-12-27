<?php
/**
 * ShipmentSourceTest
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
use OpenAPI\Client\Model\fulfillmentinbound\ShipmentSource;

/**
 * ShipmentSourceTest Class Doc Comment
 *
 * @category    Class
 * @description Specifies the &#39;ship from&#39; address for the shipment.
 * @package     OpenAPI\Client
 */
class ShipmentSourceTest extends TestCase
{

    private ShipmentSource $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentSource();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentSource"
     */
    public function testShipmentSource()
    {
        $this->assertInstanceOf(ShipmentSource::class, $this->model);
    }

    /**
     * Test attribute "address"
     */
    public function testPropertyAddress()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentinbound\Address();
        
        $this->model->setAddress($testValue);
        $this->assertEquals($testValue, $this->model->getAddress());
    }

    /**
     * Test attribute "source_type"
     */
    public function testPropertySourceType()
    {
        $testValue = 'test';
        
        $this->model->setSourceType($testValue);
        $this->assertEquals($testValue, $this->model->getSourceType());
    }
}
