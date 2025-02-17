<?php
/**
 * ShippingRequirementsTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\ShippingRequirements;

/**
 * ShippingRequirementsTest Class Doc Comment
 *
 * @category    Class
 * @description The possible shipping modes for the packing option for a given shipping solution or program. Available solutions are Amazon-Partnered Carrier and Use Your Own Carrier. Available modes are ground small parcel, freight less-than-truckload (LTL), freight full-truckload (FTL) palletized, freight FTL non-palletized, ocean less-than-container-load (LCL), ocean full-container load (FCL), air small parcel, and air small parcel express.
 * @package     SpApi
 */
class ShippingRequirementsTest extends TestCase
{

    private ShippingRequirements $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShippingRequirements();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShippingRequirements"
     */
    public function testShippingRequirements()
    {
        $this->assertInstanceOf(ShippingRequirements::class, $this->model);
    }

    /**
     * Test attribute "modes"
     */
    public function testPropertyModes()
    {
        $testValue = [];
        
        $this->model->setModes($testValue);
        $this->assertEquals($testValue, $this->model->getModes());
    }

    /**
     * Test attribute "solution"
     */
    public function testPropertySolution()
    {
        $testValue = 'test';
        
        $this->model->setSolution($testValue);
        $this->assertEquals($testValue, $this->model->getSolution());
    }
}
