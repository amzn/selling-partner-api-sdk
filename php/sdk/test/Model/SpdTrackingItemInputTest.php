<?php
/**
 * SpdTrackingItemInputTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\SpdTrackingItemInput;

/**
 * SpdTrackingItemInputTest Class Doc Comment
 *
 * @category    Class
 * @description Small Parcel Delivery (SPD) tracking items input information.
 * @package     SpApi
 */
class SpdTrackingItemInputTest extends TestCase
{

    private SpdTrackingItemInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SpdTrackingItemInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SpdTrackingItemInput"
     */
    public function testSpdTrackingItemInput()
    {
        $this->assertInstanceOf(SpdTrackingItemInput::class, $this->model);
    }

    /**
     * Test attribute "box_id"
     */
    public function testPropertyBoxId()
    {
        $testValue = 'test';
        
        $this->model->setBoxId($testValue);
        $this->assertEquals($testValue, $this->model->getBoxId());
    }

    /**
     * Test attribute "tracking_id"
     */
    public function testPropertyTrackingId()
    {
        $testValue = 'test';
        
        $this->model->setTrackingId($testValue);
        $this->assertEquals($testValue, $this->model->getTrackingId());
    }
}
