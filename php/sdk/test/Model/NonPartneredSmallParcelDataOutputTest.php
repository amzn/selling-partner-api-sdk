<?php
/**
 * NonPartneredSmallParcelDataOutputTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillmentinboundv0\NonPartneredSmallParcelDataOutput;

/**
 * NonPartneredSmallParcelDataOutputTest Class Doc Comment
 *
 * @category    Class
 * @description Information returned by Amazon about a Small Parcel shipment by a carrier that has not partnered with Amazon.
 * @package     OpenAPI\Client
 */
class NonPartneredSmallParcelDataOutputTest extends TestCase
{

    private NonPartneredSmallParcelDataOutput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new NonPartneredSmallParcelDataOutput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "NonPartneredSmallParcelDataOutput"
     */
    public function testNonPartneredSmallParcelDataOutput()
    {
        $this->assertInstanceOf(NonPartneredSmallParcelDataOutput::class, $this->model);
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
