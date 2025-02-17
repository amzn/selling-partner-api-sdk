<?php
/**
 * PlacementOptionTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\PlacementOption;

/**
 * PlacementOptionTest Class Doc Comment
 *
 * @category    Class
 * @description Contains information pertaining to the placement of the contents of an inbound plan and the related costs.
 * @package     SpApi
 */
class PlacementOptionTest extends TestCase
{

    private PlacementOption $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PlacementOption();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PlacementOption"
     */
    public function testPlacementOption()
    {
        $this->assertInstanceOf(PlacementOption::class, $this->model);
    }

    /**
     * Test attribute "discounts"
     */
    public function testPropertyDiscounts()
    {
        $testValue = [];
        
        $this->model->setDiscounts($testValue);
        $this->assertEquals($testValue, $this->model->getDiscounts());
    }

    /**
     * Test attribute "expiration"
     */
    public function testPropertyExpiration()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setExpiration($testValue);
        $this->assertEquals($testValue, $this->model->getExpiration());
    }

    /**
     * Test attribute "fees"
     */
    public function testPropertyFees()
    {
        $testValue = [];
        
        $this->model->setFees($testValue);
        $this->assertEquals($testValue, $this->model->getFees());
    }

    /**
     * Test attribute "placement_option_id"
     */
    public function testPropertyPlacementOptionId()
    {
        $testValue = 'test';
        
        $this->model->setPlacementOptionId($testValue);
        $this->assertEquals($testValue, $this->model->getPlacementOptionId());
    }

    /**
     * Test attribute "shipment_ids"
     */
    public function testPropertyShipmentIds()
    {
        $testValue = [];
        
        $this->model->setShipmentIds($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentIds());
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $testValue = 'test';
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }
}
