<?php
/**
 * PartneredSmallParcelDataInputTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\PartneredSmallParcelDataInput;

/**
 * PartneredSmallParcelDataInputTest Class Doc Comment
 *
 * @category    Class
 * @description Information that is required by an Amazon-partnered carrier to ship a Small Parcel inbound shipment.
 * @package     OpenAPI\Client
 */
class PartneredSmallParcelDataInputTest extends TestCase
{

    private PartneredSmallParcelDataInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PartneredSmallParcelDataInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PartneredSmallParcelDataInput"
     */
    public function testPartneredSmallParcelDataInput()
    {
        $this->assertInstanceOf(PartneredSmallParcelDataInput::class, $this->model);
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

    /**
     * Test attribute "carrier_name"
     */
    public function testPropertyCarrierName()
    {
        $testValue = 'test';
        
        $this->model->setCarrierName($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierName());
    }
}
