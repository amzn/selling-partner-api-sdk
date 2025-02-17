<?php
/**
 * LabelDataTest
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
use SpApi\Model\vendor\df\shipping\v2021_12_28\LabelData;

/**
 * LabelDataTest Class Doc Comment
 *
 * @category    Class
 * @description Details of the shipment label.
 * @package     SpApi
 */
class LabelDataTest extends TestCase
{

    private LabelData $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LabelData();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LabelData"
     */
    public function testLabelData()
    {
        $this->assertInstanceOf(LabelData::class, $this->model);
    }

    /**
     * Test attribute "package_identifier"
     */
    public function testPropertyPackageIdentifier()
    {
        $testValue = 'test';
        
        $this->model->setPackageIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getPackageIdentifier());
    }

    /**
     * Test attribute "tracking_number"
     */
    public function testPropertyTrackingNumber()
    {
        $testValue = 'test';
        
        $this->model->setTrackingNumber($testValue);
        $this->assertEquals($testValue, $this->model->getTrackingNumber());
    }

    /**
     * Test attribute "ship_method"
     */
    public function testPropertyShipMethod()
    {
        $testValue = 'test';
        
        $this->model->setShipMethod($testValue);
        $this->assertEquals($testValue, $this->model->getShipMethod());
    }

    /**
     * Test attribute "ship_method_name"
     */
    public function testPropertyShipMethodName()
    {
        $testValue = 'test';
        
        $this->model->setShipMethodName($testValue);
        $this->assertEquals($testValue, $this->model->getShipMethodName());
    }

    /**
     * Test attribute "content"
     */
    public function testPropertyContent()
    {
        $testValue = 'test';
        
        $this->model->setContent($testValue);
        $this->assertEquals($testValue, $this->model->getContent());
    }
}
