<?php
/**
 * CreateSupplySourceRequestTest
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
use SpApi\Model\supplySources\v2020_07_01\CreateSupplySourceRequest;

/**
 * CreateSupplySourceRequestTest Class Doc Comment
 *
 * @category    Class
 * @description A request to create a supply source.
 * @package     SpApi
 */
class CreateSupplySourceRequestTest extends TestCase
{

    private CreateSupplySourceRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateSupplySourceRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateSupplySourceRequest"
     */
    public function testCreateSupplySourceRequest()
    {
        $this->assertInstanceOf(CreateSupplySourceRequest::class, $this->model);
    }

    /**
     * Test attribute "supply_source_code"
     */
    public function testPropertySupplySourceCode()
    {
        $testValue = 'test';
        
        $this->model->setSupplySourceCode($testValue);
        $this->assertEquals($testValue, $this->model->getSupplySourceCode());
    }

    /**
     * Test attribute "alias"
     */
    public function testPropertyAlias()
    {
        $testValue = 'test';
        
        $this->model->setAlias($testValue);
        $this->assertEquals($testValue, $this->model->getAlias());
    }

    /**
     * Test attribute "address"
     */
    public function testPropertyAddress()
    {
        
        $testValue = new \SpApi\Model\supplySources\v2020_07_01\Address();
        
        $this->model->setAddress($testValue);
        $this->assertEquals($testValue, $this->model->getAddress());
    }
}
