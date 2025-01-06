<?php
/**
 * ShippingLabelListTest
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
use OpenAPI\Client\Model\vendorDfShipping\ShippingLabelList;

/**
 * ShippingLabelListTest Class Doc Comment
 *
 * @category    Class
 * @description Response payload with the list of shipping labels.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\vendorDfShipping\Pagination();
        
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
