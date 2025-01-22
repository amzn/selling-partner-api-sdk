<?php
/**
 * PackageItemDetailsTest
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
use OpenAPI\Client\Model\vendor\shipments\PackageItemDetails;

/**
 * PackageItemDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Item details for be provided for every item in shipment at either the item or carton or pallet level, whichever is appropriate.
 * @package     OpenAPI\Client
 */
class PackageItemDetailsTest extends TestCase
{

    private PackageItemDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PackageItemDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PackageItemDetails"
     */
    public function testPackageItemDetails()
    {
        $this->assertInstanceOf(PackageItemDetails::class, $this->model);
    }

    /**
     * Test attribute "purchase_order_number"
     */
    public function testPropertyPurchaseOrderNumber()
    {
        $testValue = 'test';
        
        $this->model->setPurchaseOrderNumber($testValue);
        $this->assertEquals($testValue, $this->model->getPurchaseOrderNumber());
    }

    /**
     * Test attribute "lot_number"
     */
    public function testPropertyLotNumber()
    {
        $testValue = 'test';
        
        $this->model->setLotNumber($testValue);
        $this->assertEquals($testValue, $this->model->getLotNumber());
    }

    /**
     * Test attribute "expiry"
     */
    public function testPropertyExpiry()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\shipments\Expiry();
        
        $this->model->setExpiry($testValue);
        $this->assertEquals($testValue, $this->model->getExpiry());
    }
}
