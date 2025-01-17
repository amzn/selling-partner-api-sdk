<?php
/**
 * PurchaseOrderItemDetailsTest
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
use OpenAPI\Client\Model\vendor\shipments\PurchaseOrderItemDetails;

/**
 * PurchaseOrderItemDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Item details for be provided for every item in shipment at either the item or carton or pallet level, whichever is appropriate.
 * @package     OpenAPI\Client
 */
class PurchaseOrderItemDetailsTest extends TestCase
{

    private PurchaseOrderItemDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PurchaseOrderItemDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PurchaseOrderItemDetails"
     */
    public function testPurchaseOrderItemDetails()
    {
        $this->assertInstanceOf(PurchaseOrderItemDetails::class, $this->model);
    }

    /**
     * Test attribute "maximum_retail_price"
     */
    public function testPropertyMaximumRetailPrice()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\shipments\Money();
        
        $this->model->setMaximumRetailPrice($testValue);
        $this->assertEquals($testValue, $this->model->getMaximumRetailPrice());
    }
}
