<?php
/**
 * PartneredSmallParcelPackageOutputTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\PartneredSmallParcelPackageOutput;

/**
 * PartneredSmallParcelPackageOutputTest Class Doc Comment
 *
 * @category    Class
 * @description Dimension, weight, and shipping information for the package.
 * @package     OpenAPI\Client
 */
class PartneredSmallParcelPackageOutputTest extends TestCase
{

    private PartneredSmallParcelPackageOutput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PartneredSmallParcelPackageOutput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PartneredSmallParcelPackageOutput"
     */
    public function testPartneredSmallParcelPackageOutput()
    {
        $this->assertInstanceOf(PartneredSmallParcelPackageOutput::class, $this->model);
    }

    /**
     * Test attribute "dimensions"
     */
    public function testPropertyDimensions()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\Dimensions();
        
        $this->model->setDimensions($testValue);
        $this->assertEquals($testValue, $this->model->getDimensions());
    }

    /**
     * Test attribute "weight"
     */
    public function testPropertyWeight()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\Weight();
        
        $this->model->setWeight($testValue);
        $this->assertEquals($testValue, $this->model->getWeight());
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
