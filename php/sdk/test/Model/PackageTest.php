<?php
/**
 * PackageTest
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
use SpApi\Model\easyship\v2022_03_23\Package;

/**
 * PackageTest Class Doc Comment
 *
 * @category    Class
 * @description This object contains all the details of the scheduled Easy Ship package.
 * @package     SpApi
 */
class PackageTest extends TestCase
{

    private Package $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Package();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Package"
     */
    public function testPackage()
    {
        $this->assertInstanceOf(Package::class, $this->model);
    }

    /**
     * Test attribute "scheduled_package_id"
     */
    public function testPropertyScheduledPackageId()
    {
        
        $testValue = new \SpApi\Model\easyship\v2022_03_23\ScheduledPackageId();
        
        $this->model->setScheduledPackageId($testValue);
        $this->assertEquals($testValue, $this->model->getScheduledPackageId());
    }

    /**
     * Test attribute "package_dimensions"
     */
    public function testPropertyPackageDimensions()
    {
        
        $testValue = new \SpApi\Model\easyship\v2022_03_23\Dimensions();
        
        $this->model->setPackageDimensions($testValue);
        $this->assertEquals($testValue, $this->model->getPackageDimensions());
    }

    /**
     * Test attribute "package_weight"
     */
    public function testPropertyPackageWeight()
    {
        
        $testValue = new \SpApi\Model\easyship\v2022_03_23\Weight();
        
        $this->model->setPackageWeight($testValue);
        $this->assertEquals($testValue, $this->model->getPackageWeight());
    }

    /**
     * Test attribute "package_items"
     */
    public function testPropertyPackageItems()
    {
        $testValue = [];
        
        $this->model->setPackageItems($testValue);
        $this->assertEquals($testValue, $this->model->getPackageItems());
    }

    /**
     * Test attribute "package_time_slot"
     */
    public function testPropertyPackageTimeSlot()
    {
        
        $testValue = new \SpApi\Model\easyship\v2022_03_23\TimeSlot();
        
        $this->model->setPackageTimeSlot($testValue);
        $this->assertEquals($testValue, $this->model->getPackageTimeSlot());
    }

    /**
     * Test attribute "package_identifier"
     */
    public function testPropertyPackageIdentifier()
    {
        $testValue = 'test';
        
        $this->model->setPackageIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getPackageIdentifier());
    }

    /**
     * Test attribute "invoice"
     */
    public function testPropertyInvoice()
    {
        
        $testValue = new \SpApi\Model\easyship\v2022_03_23\InvoiceData();
        
        $this->model->setInvoice($testValue);
        $this->assertEquals($testValue, $this->model->getInvoice());
    }

    /**
     * Test attribute "package_status"
     */
    public function testPropertyPackageStatus()
    {
        $enumInstance = new \SpApi\Model\easyship\v2022_03_23\PackageStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setPackageStatus($testValue);
        $this->assertEquals($testValue, $this->model->getPackageStatus());
    }

    /**
     * Test attribute "tracking_details"
     */
    public function testPropertyTrackingDetails()
    {
        
        $testValue = new \SpApi\Model\easyship\v2022_03_23\TrackingDetails();
        
        $this->model->setTrackingDetails($testValue);
        $this->assertEquals($testValue, $this->model->getTrackingDetails());
    }
}
