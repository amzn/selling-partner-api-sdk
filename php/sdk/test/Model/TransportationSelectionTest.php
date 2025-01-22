<?php
/**
 * TransportationSelectionTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\TransportationSelection;

/**
 * TransportationSelectionTest Class Doc Comment
 *
 * @category    Class
 * @description The transportation option selected to confirm.
 * @package     OpenAPI\Client
 */
class TransportationSelectionTest extends TestCase
{

    private TransportationSelection $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransportationSelection();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransportationSelection"
     */
    public function testTransportationSelection()
    {
        $this->assertInstanceOf(TransportationSelection::class, $this->model);
    }

    /**
     * Test attribute "contact_information"
     */
    public function testPropertyContactInformation()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ContactInformation();
        
        $this->model->setContactInformation($testValue);
        $this->assertEquals($testValue, $this->model->getContactInformation());
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

    /**
     * Test attribute "transportation_option_id"
     */
    public function testPropertyTransportationOptionId()
    {
        $testValue = 'test';
        
        $this->model->setTransportationOptionId($testValue);
        $this->assertEquals($testValue, $this->model->getTransportationOptionId());
    }
}
