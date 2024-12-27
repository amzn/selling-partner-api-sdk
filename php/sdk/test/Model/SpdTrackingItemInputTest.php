<?php
/**
 * SpdTrackingItemInputTest
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
use OpenAPI\Client\Model\fulfillmentinbound\SpdTrackingItemInput;

/**
 * SpdTrackingItemInputTest Class Doc Comment
 *
 * @category    Class
 * @description Small Parcel Delivery (SPD) tracking items input information.
 * @package     OpenAPI\Client
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
