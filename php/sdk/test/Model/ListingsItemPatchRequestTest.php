<?php
/**
 * ListingsItemPatchRequestTest
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
use OpenAPI\Client\Model\listings\items\v2021_08_01\ListingsItemPatchRequest;

/**
 * ListingsItemPatchRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request body schema for the &#x60;patchListingsItem&#x60; operation.
 * @package     OpenAPI\Client
 */
class ListingsItemPatchRequestTest extends TestCase
{

    private ListingsItemPatchRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListingsItemPatchRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListingsItemPatchRequest"
     */
    public function testListingsItemPatchRequest()
    {
        $this->assertInstanceOf(ListingsItemPatchRequest::class, $this->model);
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
     * Test attribute "patches"
     */
    public function testPropertyPatches()
    {
        $testValue = [];
        
        $this->model->setPatches($testValue);
        $this->assertEquals($testValue, $this->model->getPatches());
    }
}
