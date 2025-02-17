<?php
/**
 * ShippingLabelListTest
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
use SpApi\Model\vendor\df\shipping\v2021_12_28\ShippingLabelList;

/**
 * ShippingLabelListTest Class Doc Comment
 *
 * @category    Class
 * @description Response payload with the list of shipping labels.
 * @package     SpApi
 */
class ShippingLabelListTest extends TestCase
{

    private ShippingLabelList $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShippingLabelList();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShippingLabelList"
     */
    public function testShippingLabelList()
    {
        $this->assertInstanceOf(ShippingLabelList::class, $this->model);
    }

    /**
     * Test attribute "pagination"
     */
    public function testPropertyPagination()
    {
        
        $testValue = new \SpApi\Model\vendor\df\shipping\v2021_12_28\Pagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }

    /**
     * Test attribute "shipping_labels"
     */
    public function testPropertyShippingLabels()
    {
        $testValue = [];
        
        $this->model->setShippingLabels($testValue);
        $this->assertEquals($testValue, $this->model->getShippingLabels());
    }
}
