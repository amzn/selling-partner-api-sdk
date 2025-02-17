<?php
/**
 * PackageDetailsTest
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
use SpApi\Model\easyship\v2022_03_23\PackageDetails;

/**
 * PackageDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Package details. Includes &#x60;packageItems&#x60;, &#x60;packageTimeSlot&#x60;, and &#x60;packageIdentifier&#x60;.
 * @package     SpApi
 */
class PackageDetailsTest extends TestCase
{

    private PackageDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PackageDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PackageDetails"
     */
    public function testPackageDetails()
    {
        $this->assertInstanceOf(PackageDetails::class, $this->model);
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
}
