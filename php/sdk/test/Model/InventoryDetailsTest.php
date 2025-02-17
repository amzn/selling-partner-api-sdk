<?php
/**
 * InventoryDetailsTest
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
use SpApi\Model\awd\v2024_05_09\InventoryDetails;

/**
 * InventoryDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Additional inventory details. This object is only displayed if the details parameter in the request is set to &#x60;SHOW&#x60;.
 * @package     SpApi
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
     * Test attribute "replenishment_quantity"
     */
    public function testPropertyReplenishmentQuantity()
    {
        
        $testValue = new int();
        
        $this->model->setReplenishmentQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getReplenishmentQuantity());
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
