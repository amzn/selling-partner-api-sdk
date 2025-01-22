<?php
/**
 * SkuQuantityTest
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
use OpenAPI\Client\Model\awd\SkuQuantity;

/**
 * SkuQuantityTest Class Doc Comment
 *
 * @category    Class
 * @description Quantity details for a SKU as part of a shipment
 * @package     OpenAPI\Client
 */
class SkuQuantityTest extends TestCase
{

    private SkuQuantity $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SkuQuantity();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SkuQuantity"
     */
    public function testSkuQuantity()
    {
        $this->assertInstanceOf(SkuQuantity::class, $this->model);
    }

    /**
     * Test attribute "expected_quantity"
     */
    public function testPropertyExpectedQuantity()
    {
        
        $testValue = new \OpenAPI\Client\Model\awd\InventoryQuantity();
        
        $this->model->setExpectedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getExpectedQuantity());
    }

    /**
     * Test attribute "received_quantity"
     */
    public function testPropertyReceivedQuantity()
    {
        
        $testValue = new \OpenAPI\Client\Model\awd\InventoryQuantity();
        
        $this->model->setReceivedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getReceivedQuantity());
    }

    /**
     * Test attribute "sku"
     */
    public function testPropertySku()
    {
        $testValue = 'test';
        
        $this->model->setSku($testValue);
        $this->assertEquals($testValue, $this->model->getSku());
    }
}
