<?php
/**
 * InventoryDetailsTest
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
use OpenAPI\Client\Model\awd\InventoryDetails;

/**
 * InventoryDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Additional inventory details. This object is only displayed if the details parameter in the request is set to &#x60;SHOW&#x60;.
 * @package     OpenAPI\Client
 */
class InventoryDetailsTest extends TestCase
{

    private InventoryDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InventoryDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InventoryDetails"
     */
    public function testInventoryDetails()
    {
        $this->assertInstanceOf(InventoryDetails::class, $this->model);
    }

    /**
     * Test attribute "available_distributable_quantity"
     */
    public function testPropertyAvailableDistributableQuantity()
    {
        
        $testValue = new int();
        
        $this->model->setAvailableDistributableQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getAvailableDistributableQuantity());
    }

    /**
     * Test attribute "reserved_distributable_quantity"
     */
    public function testPropertyReservedDistributableQuantity()
    {
        
        $testValue = new int();
        
        $this->model->setReservedDistributableQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getReservedDistributableQuantity());
    }
}
