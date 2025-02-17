<?php
/**
 * DeliveryInformationTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\DeliveryInformation;

/**
 * DeliveryInformationTest Class Doc Comment
 *
 * @category    Class
 * @description The delivery information for the package. This information is available after the package is delivered.
 * @package     SpApi
 */
class DeliveryInformationTest extends TestCase
{

    private DeliveryInformation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DeliveryInformation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DeliveryInformation"
     */
    public function testDeliveryInformation()
    {
        $this->assertInstanceOf(DeliveryInformation::class, $this->model);
    }

    /**
     * Test attribute "delivery_document_list"
     */
    public function testPropertyDeliveryDocumentList()
    {
        $testValue = [];
        
        $this->model->setDeliveryDocumentList($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryDocumentList());
    }

    /**
     * Test attribute "drop_off_location"
     */
    public function testPropertyDropOffLocation()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\DropOffLocation();
        
        $this->model->setDropOffLocation($testValue);
        $this->assertEquals($testValue, $this->model->getDropOffLocation());
    }
}
