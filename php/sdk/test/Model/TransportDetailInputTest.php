<?php
/**
 * TransportDetailInputTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\TransportDetailInput;

/**
 * TransportDetailInputTest Class Doc Comment
 *
 * @category    Class
 * @description Information required to create an Amazon-partnered carrier shipping estimate, or to alert the Amazon fulfillment center to the arrival of an inbound shipment by a non-Amazon-partnered carrier.
 * @package     OpenAPI\Client
 */
class TransportDetailInputTest extends TestCase
{

    private TransportDetailInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransportDetailInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransportDetailInput"
     */
    public function testTransportDetailInput()
    {
        $this->assertInstanceOf(TransportDetailInput::class, $this->model);
    }

    /**
     * Test attribute "partnered_small_parcel_data"
     */
    public function testPropertyPartneredSmallParcelData()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\PartneredSmallParcelDataInput();
        
        $this->model->setPartneredSmallParcelData($testValue);
        $this->assertEquals($testValue, $this->model->getPartneredSmallParcelData());
    }

    /**
     * Test attribute "non_partnered_small_parcel_data"
     */
    public function testPropertyNonPartneredSmallParcelData()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\NonPartneredSmallParcelDataInput();
        
        $this->model->setNonPartneredSmallParcelData($testValue);
        $this->assertEquals($testValue, $this->model->getNonPartneredSmallParcelData());
    }

    /**
     * Test attribute "partnered_ltl_data"
     */
    public function testPropertyPartneredLtlData()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\PartneredLtlDataInput();
        
        $this->model->setPartneredLtlData($testValue);
        $this->assertEquals($testValue, $this->model->getPartneredLtlData());
    }

    /**
     * Test attribute "non_partnered_ltl_data"
     */
    public function testPropertyNonPartneredLtlData()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\NonPartneredLtlDataInput();
        
        $this->model->setNonPartneredLtlData($testValue);
        $this->assertEquals($testValue, $this->model->getNonPartneredLtlData());
    }
}
