<?php
/**
 * ValueAddedServiceTest
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
use SpApi\Model\shipping\v2\ValueAddedService;

/**
 * ValueAddedServiceTest Class Doc Comment
 *
 * @category    Class
 * @description A value-added service available for purchase with a shipment service offering.
 * @package     SpApi
 */
class ValueAddedServiceTest extends TestCase
{

    private ValueAddedService $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ValueAddedService();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ValueAddedService"
     */
    public function testValueAddedService()
    {
        $this->assertInstanceOf(ValueAddedService::class, $this->model);
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
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $testValue = 'test';
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }

    /**
     * Test attribute "cost"
     */
    public function testPropertyCost()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\Currency();
        
        $this->model->setCost($testValue);
        $this->assertEquals($testValue, $this->model->getCost());
    }
}
