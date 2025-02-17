<?php
/**
 * UnmanifestedShipmentLocationTest
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
use SpApi\Model\shipping\v2\UnmanifestedShipmentLocation;

/**
 * UnmanifestedShipmentLocationTest Class Doc Comment
 *
 * @category    Class
 * @description UnmanifestedShipmentLocation info
 * @package     SpApi
 */
class UnmanifestedShipmentLocationTest extends TestCase
{

    private UnmanifestedShipmentLocation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UnmanifestedShipmentLocation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UnmanifestedShipmentLocation"
     */
    public function testUnmanifestedShipmentLocation()
    {
        $this->assertInstanceOf(UnmanifestedShipmentLocation::class, $this->model);
    }

    /**
     * Test attribute "address"
     */
    public function testPropertyAddress()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\Address();
        
        $this->model->setAddress($testValue);
        $this->assertEquals($testValue, $this->model->getAddress());
    }

    /**
     * Test attribute "last_manifest_date"
     */
    public function testPropertyLastManifestDate()
    {
        $testValue = 'test';
        
        $this->model->setLastManifestDate($testValue);
        $this->assertEquals($testValue, $this->model->getLastManifestDate());
    }
}
