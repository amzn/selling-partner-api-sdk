<?php
/**
 * UnfulfillableQuantityTest
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
use SpApi\Model\fba\inventory\v1\UnfulfillableQuantity;

/**
 * UnfulfillableQuantityTest Class Doc Comment
 *
 * @category    Class
 * @description The quantity of unfulfillable inventory.
 * @package     SpApi
 */
class UnfulfillableQuantityTest extends TestCase
{

    private UnfulfillableQuantity $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UnfulfillableQuantity();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UnfulfillableQuantity"
     */
    public function testUnfulfillableQuantity()
    {
        $this->assertInstanceOf(UnfulfillableQuantity::class, $this->model);
    }

    /**
     * Test attribute "total_unfulfillable_quantity"
     */
    public function testPropertyTotalUnfulfillableQuantity()
    {
        $testValue = 123;
        
        $this->model->setTotalUnfulfillableQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getTotalUnfulfillableQuantity());
    }

    /**
     * Test attribute "customer_damaged_quantity"
     */
    public function testPropertyCustomerDamagedQuantity()
    {
        $testValue = 123;
        
        $this->model->setCustomerDamagedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getCustomerDamagedQuantity());
    }

    /**
     * Test attribute "warehouse_damaged_quantity"
     */
    public function testPropertyWarehouseDamagedQuantity()
    {
        $testValue = 123;
        
        $this->model->setWarehouseDamagedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getWarehouseDamagedQuantity());
    }

    /**
     * Test attribute "distributor_damaged_quantity"
     */
    public function testPropertyDistributorDamagedQuantity()
    {
        $testValue = 123;
        
        $this->model->setDistributorDamagedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getDistributorDamagedQuantity());
    }

    /**
     * Test attribute "carrier_damaged_quantity"
     */
    public function testPropertyCarrierDamagedQuantity()
    {
        $testValue = 123;
        
        $this->model->setCarrierDamagedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierDamagedQuantity());
    }

    /**
     * Test attribute "defective_quantity"
     */
    public function testPropertyDefectiveQuantity()
    {
        $testValue = 123;
        
        $this->model->setDefectiveQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getDefectiveQuantity());
    }

    /**
     * Test attribute "expired_quantity"
     */
    public function testPropertyExpiredQuantity()
    {
        $testValue = 123;
        
        $this->model->setExpiredQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getExpiredQuantity());
    }
}
