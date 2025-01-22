<?php
/**
 * GetPreorderInfoResultTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\GetPreorderInfoResult;

/**
 * GetPreorderInfoResultTest Class Doc Comment
 *
 * @category    Class
 * @description Result for the get preorder info operation
 * @package     OpenAPI\Client
 */
class GetPreorderInfoResultTest extends TestCase
{

    private GetPreorderInfoResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetPreorderInfoResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetPreorderInfoResult"
     */
    public function testGetPreorderInfoResult()
    {
        $this->assertInstanceOf(GetPreorderInfoResult::class, $this->model);
    }

    /**
     * Test attribute "shipment_contains_preorderable_items"
     */
    public function testPropertyShipmentContainsPreorderableItems()
    {
        $testValue = true;
        
        $this->model->setShipmentContainsPreorderableItems($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentContainsPreorderableItems());
    }

    /**
     * Test attribute "shipment_confirmed_for_preorder"
     */
    public function testPropertyShipmentConfirmedForPreorder()
    {
        $testValue = true;
        
        $this->model->setShipmentConfirmedForPreorder($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentConfirmedForPreorder());
    }

    /**
     * Test attribute "need_by_date"
     */
    public function testPropertyNeedByDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setNeedByDate($testValue);
        $this->assertEquals($testValue, $this->model->getNeedByDate());
    }

    /**
     * Test attribute "confirmed_fulfillable_date"
     */
    public function testPropertyConfirmedFulfillableDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setConfirmedFulfillableDate($testValue);
        $this->assertEquals($testValue, $this->model->getConfirmedFulfillableDate());
    }
}
