<?php
/**
 * ShipmentLabelsTest
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
use SpApi\Model\awd\v2024_05_09\ShipmentLabels;

/**
 * ShipmentLabelsTest Class Doc Comment
 *
 * @category    Class
 * @description Shipment labels.
 * @package     SpApi
 */
class ShipmentLabelsTest extends TestCase
{

    private ShipmentLabels $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentLabels();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentLabels"
     */
    public function testShipmentLabels()
    {
        $this->assertInstanceOf(ShipmentLabels::class, $this->model);
    }

    /**
     * Test attribute "label_download_url"
     */
    public function testPropertyLabelDownloadUrl()
    {
        $testValue = 'test';
        
        $this->model->setLabelDownloadUrl($testValue);
        $this->assertEquals($testValue, $this->model->getLabelDownloadUrl());
    }

    /**
     * Test attribute "label_status"
     */
    public function testPropertyLabelStatus()
    {
        $enumInstance = new \SpApi\Model\awd\v2024_05_09\LabelStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setLabelStatus($testValue);
        $this->assertEquals($testValue, $this->model->getLabelStatus());
    }
}
