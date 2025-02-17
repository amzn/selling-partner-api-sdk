<?php
/**
 * OneClickShipmentValueAddedServiceTest
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
use SpApi\Model\shipping\v2\OneClickShipmentValueAddedService;

/**
 * OneClickShipmentValueAddedServiceTest Class Doc Comment
 *
 * @category    Class
 * @description A value-added service to be applied to a shipping service purchase.
 * @package     SpApi
 */
class OneClickShipmentValueAddedServiceTest extends TestCase
{

    private OneClickShipmentValueAddedService $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OneClickShipmentValueAddedService();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OneClickShipmentValueAddedService"
     */
    public function testOneClickShipmentValueAddedService()
    {
        $this->assertInstanceOf(OneClickShipmentValueAddedService::class, $this->model);
    }

    /**
     * Test attribute "id"
     */
    public function testPropertyId()
    {
        $testValue = 'test';
        
        $this->model->setId($testValue);
        $this->assertEquals($testValue, $this->model->getId());
    }

    /**
     * Test attribute "amount"
     */
    public function testPropertyAmount()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\Currency();
        
        $this->model->setAmount($testValue);
        $this->assertEquals($testValue, $this->model->getAmount());
    }
}
