<?php
/**
 * PartneredSmallParcelDataOutputTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\PartneredSmallParcelDataOutput;

/**
 * PartneredSmallParcelDataOutputTest Class Doc Comment
 *
 * @category    Class
 * @description Information returned by Amazon about a Small Parcel shipment by an Amazon-partnered carrier.
 * @package     OpenAPI\Client
 */
class PartneredSmallParcelDataOutputTest extends TestCase
{

    private PartneredSmallParcelDataOutput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PartneredSmallParcelDataOutput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PartneredSmallParcelDataOutput"
     */
    public function testPartneredSmallParcelDataOutput()
    {
        $this->assertInstanceOf(PartneredSmallParcelDataOutput::class, $this->model);
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
     * Test attribute "partnered_estimate"
     */
    public function testPropertyPartneredEstimate()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\PartneredEstimate();
        
        $this->model->setPartneredEstimate($testValue);
        $this->assertEquals($testValue, $this->model->getPartneredEstimate());
    }
}
