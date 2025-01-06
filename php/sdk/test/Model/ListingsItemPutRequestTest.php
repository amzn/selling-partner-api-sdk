<?php
/**
 * ListingsItemPutRequestTest
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
use OpenAPI\Client\Model\listingsItems\ListingsItemPutRequest;

/**
 * ListingsItemPutRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request body schema for the &#x60;putListingsItem&#x60; operation.
 * @package     OpenAPI\Client
 */
class ListingsItemPutRequestTest extends TestCase
{

    private ListingsItemPutRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListingsItemPutRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListingsItemPutRequest"
     */
    public function testListingsItemPutRequest()
    {
        $this->assertInstanceOf(ListingsItemPutRequest::class, $this->model);
    }

    /**
     * Test attribute "product_type"
     */
    public function testPropertyProductType()
    {
        $testValue = 'test';
        
        $this->model->setProductType($testValue);
        $this->assertEquals($testValue, $this->model->getProductType());
    }

    /**
     * Test attribute "requirements"
     */
    public function testPropertyRequirements()
    {
        $enumInstance = new ListingsItemPutRequest();
        $allowedValues = $enumInstance->getRequirementsAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setRequirements($testValue);
        $this->assertEquals($testValue, $this->model->getRequirements());
    }

    /**
     * Test attribute "attributes"
     */
    public function testPropertyAttributes()
    {
        
        $testValue = new array<string,mixed>();
        
        $this->model->setAttributes($testValue);
        $this->assertEquals($testValue, $this->model->getAttributes());
    }
}
