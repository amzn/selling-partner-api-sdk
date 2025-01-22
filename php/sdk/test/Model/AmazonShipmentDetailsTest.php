<?php
/**
 * AmazonShipmentDetailsTest
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
use OpenAPI\Client\Model\shipping\AmazonShipmentDetails;

/**
 * AmazonShipmentDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Amazon shipment information.
 * @package     OpenAPI\Client
 */
class AmazonShipmentDetailsTest extends TestCase
{

    private AmazonShipmentDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AmazonShipmentDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AmazonShipmentDetails"
     */
    public function testAmazonShipmentDetails()
    {
        $this->assertInstanceOf(AmazonShipmentDetails::class, $this->model);
    }

    /**
     * Test attribute "shipment_id"
     */
    public function testPropertyShipmentId()
    {
        $testValue = 'test';
        
        $this->model->setShipmentId($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentId());
    }
}
