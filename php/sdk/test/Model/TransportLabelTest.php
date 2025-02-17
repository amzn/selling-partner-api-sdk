<?php
/**
 * TransportLabelTest
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
use SpApi\Model\vendor\shipments\v1\TransportLabel;

/**
 * TransportLabelTest Class Doc Comment
 *
 * @category    Class
 * @description A list of one or more ShipmentLabels.
 * @package     SpApi
 */
class TransportLabelTest extends TestCase
{

    private TransportLabel $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransportLabel();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransportLabel"
     */
    public function testTransportLabel()
    {
        $this->assertInstanceOf(TransportLabel::class, $this->model);
    }

    /**
     * Test attribute "label_create_date_time"
     */
    public function testPropertyLabelCreateDateTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setLabelCreateDateTime($testValue);
        $this->assertEquals($testValue, $this->model->getLabelCreateDateTime());
    }

    /**
     * Test attribute "shipment_information"
     */
    public function testPropertyShipmentInformation()
    {
        
        $testValue = new \SpApi\Model\vendor\shipments\v1\ShipmentInformation();
        
        $this->model->setShipmentInformation($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentInformation());
    }

    /**
     * Test attribute "label_data"
     */
    public function testPropertyLabelData()
    {
        $testValue = [];
        
        $this->model->setLabelData($testValue);
        $this->assertEquals($testValue, $this->model->getLabelData());
    }
}
