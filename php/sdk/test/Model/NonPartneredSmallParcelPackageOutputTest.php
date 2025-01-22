<?php
/**
 * NonPartneredSmallParcelPackageOutputTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\NonPartneredSmallParcelPackageOutput;

/**
 * NonPartneredSmallParcelPackageOutputTest Class Doc Comment
 *
 * @category    Class
 * @description Carrier, tracking number, and status information for the package.
 * @package     OpenAPI\Client
 */
class NonPartneredSmallParcelPackageOutputTest extends TestCase
{

    private NonPartneredSmallParcelPackageOutput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new NonPartneredSmallParcelPackageOutput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "NonPartneredSmallParcelPackageOutput"
     */
    public function testNonPartneredSmallParcelPackageOutput()
    {
        $this->assertInstanceOf(NonPartneredSmallParcelPackageOutput::class, $this->model);
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
     * Test attribute "tracking_id"
     */
    public function testPropertyTrackingId()
    {
        $testValue = 'test';
        
        $this->model->setTrackingId($testValue);
        $this->assertEquals($testValue, $this->model->getTrackingId());
    }

    /**
     * Test attribute "package_status"
     */
    public function testPropertyPackageStatus()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\inbound\v0\PackageStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setPackageStatus($testValue);
        $this->assertEquals($testValue, $this->model->getPackageStatus());
    }
}
