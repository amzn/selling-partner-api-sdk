<?php
/**
 * ProductInfoDetailTest
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
use OpenAPI\Client\Model\orders\v0\ProductInfoDetail;

/**
 * ProductInfoDetailTest Class Doc Comment
 *
 * @category    Class
 * @description Product information on the number of items.
 * @package     OpenAPI\Client
 */
class ProductInfoDetailTest extends TestCase
{

    private ProductInfoDetail $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ProductInfoDetail();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ProductInfoDetail"
     */
    public function testProductInfoDetail()
    {
        $this->assertInstanceOf(ProductInfoDetail::class, $this->model);
    }

    /**
     * Test attribute "number_of_items"
     */
    public function testPropertyNumberOfItems()
    {
        $testValue = 'test';
        
        $this->model->setNumberOfItems($testValue);
        $this->assertEquals($testValue, $this->model->getNumberOfItems());
    }
}
