<?php
/**
 * NonPartneredLtlDataOutputTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\NonPartneredLtlDataOutput;

/**
 * NonPartneredLtlDataOutputTest Class Doc Comment
 *
 * @category    Class
 * @description Information returned by Amazon about a Less Than Truckload/Full Truckload (LTL/FTL) shipment shipped by a carrier that has not partnered with Amazon.
 * @package     OpenAPI\Client
 */
class NonPartneredLtlDataOutputTest extends TestCase
{

    private NonPartneredLtlDataOutput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new NonPartneredLtlDataOutput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "NonPartneredLtlDataOutput"
     */
    public function testNonPartneredLtlDataOutput()
    {
        $this->assertInstanceOf(NonPartneredLtlDataOutput::class, $this->model);
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
     * Test attribute "pro_number"
     */
    public function testPropertyProNumber()
    {
        $testValue = 'test';
        
        $this->model->setProNumber($testValue);
        $this->assertEquals($testValue, $this->model->getProNumber());
    }
}
