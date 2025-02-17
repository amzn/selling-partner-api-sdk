<?php
/**
 * PackageDetailTest
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
use SpApi\Model\orders\v0\PackageDetail;

/**
 * PackageDetailTest Class Doc Comment
 *
 * @category    Class
 * @description Properties of packages
 * @package     SpApi
 */
class PackageDetailTest extends TestCase
{

    private PackageDetail $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PackageDetail();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PackageDetail"
     */
    public function testPackageDetail()
    {
        $this->assertInstanceOf(PackageDetail::class, $this->model);
    }

    /**
     * Test attribute "package_reference_id"
     */
    public function testPropertyPackageReferenceId()
    {
        $testValue = 'test';
        
        $this->model->setPackageReferenceId($testValue);
        $this->assertEquals($testValue, $this->model->getPackageReferenceId());
    }

    /**
     * Test attribute "carrier_code"
     */
    public function testPropertyCarrierCode()
    {
        $testValue = 'test';
        
        $this->model->setCarrierCode($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierCode());
    }

    /**
     * Test attribute "carrier_name"
     */
    public function testPropertyCarrierName()
    {
        $testValue = 'test';
        
        $this->model->setCarrierName($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierName());
    }

    /**
     * Test attribute "shipping_method"
     */
    public function testPropertyShippingMethod()
    {
        $testValue = 'test';
        
        $this->model->setShippingMethod($testValue);
        $this->assertEquals($testValue, $this->model->getShippingMethod());
    }

    /**
     * Test attribute "tracking_number"
     */
    public function testPropertyTrackingNumber()
    {
        $testValue = 'test';
        
        $this->model->setTrackingNumber($testValue);
        $this->assertEquals($testValue, $this->model->getTrackingNumber());
    }

    /**
     * Test attribute "ship_date"
     */
    public function testPropertyShipDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setShipDate($testValue);
        $this->assertEquals($testValue, $this->model->getShipDate());
    }

    /**
     * Test attribute "ship_from_supply_source_id"
     */
    public function testPropertyShipFromSupplySourceId()
    {
        $testValue = 'test';
        
        $this->model->setShipFromSupplySourceId($testValue);
        $this->assertEquals($testValue, $this->model->getShipFromSupplySourceId());
    }

    /**
     * Test attribute "order_items"
     */
    public function testPropertyOrderItems()
    {
        $testValue = [];
        
        $this->model->setOrderItems($testValue);
        $this->assertEquals($testValue, $this->model->getOrderItems());
    }
}
