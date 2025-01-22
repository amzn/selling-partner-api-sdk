<?php
/**
 * NonPartneredSmallParcelDataInputTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\NonPartneredSmallParcelDataInput;

/**
 * NonPartneredSmallParcelDataInputTest Class Doc Comment
 *
 * @category    Class
 * @description Information that you provide to Amazon about a Small Parcel shipment shipped by a carrier that has not partnered with Amazon.
 * @package     OpenAPI\Client
 */
class NonPartneredSmallParcelDataInputTest extends TestCase
{

    private NonPartneredSmallParcelDataInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new NonPartneredSmallParcelDataInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "NonPartneredSmallParcelDataInput"
     */
    public function testNonPartneredSmallParcelDataInput()
    {
        $this->assertInstanceOf(NonPartneredSmallParcelDataInput::class, $this->model);
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
     * Test attribute "package_list"
     */
    public function testPropertyPackageList()
    {
        $testValue = [];
        
        $this->model->setPackageList($testValue);
        $this->assertEquals($testValue, $this->model->getPackageList());
    }
}
