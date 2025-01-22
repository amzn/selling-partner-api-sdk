<?php
/**
 * TransportDetailOutputTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\TransportDetailOutput;

/**
 * TransportDetailOutputTest Class Doc Comment
 *
 * @category    Class
 * @description Inbound shipment information, including carrier details and shipment status.
 * @package     OpenAPI\Client
 */
class TransportDetailOutputTest extends TestCase
{

    private TransportDetailOutput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransportDetailOutput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransportDetailOutput"
     */
    public function testTransportDetailOutput()
    {
        $this->assertInstanceOf(TransportDetailOutput::class, $this->model);
    }

    /**
     * Test attribute "partnered_small_parcel_data"
     */
    public function testPropertyPartneredSmallParcelData()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\PartneredSmallParcelDataOutput();
        
        $this->model->setPartneredSmallParcelData($testValue);
        $this->assertEquals($testValue, $this->model->getPartneredSmallParcelData());
    }

    /**
     * Test attribute "non_partnered_small_parcel_data"
     */
    public function testPropertyNonPartneredSmallParcelData()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\NonPartneredSmallParcelDataOutput();
        
        $this->model->setNonPartneredSmallParcelData($testValue);
        $this->assertEquals($testValue, $this->model->getNonPartneredSmallParcelData());
    }

    /**
     * Test attribute "partnered_ltl_data"
     */
    public function testPropertyPartneredLtlData()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\PartneredLtlDataOutput();
        
        $this->model->setPartneredLtlData($testValue);
        $this->assertEquals($testValue, $this->model->getPartneredLtlData());
    }

    /**
     * Test attribute "non_partnered_ltl_data"
     */
    public function testPropertyNonPartneredLtlData()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\NonPartneredLtlDataOutput();
        
        $this->model->setNonPartneredLtlData($testValue);
        $this->assertEquals($testValue, $this->model->getNonPartneredLtlData());
    }
}
