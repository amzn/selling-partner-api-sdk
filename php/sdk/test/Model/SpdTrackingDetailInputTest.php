<?php
/**
 * SpdTrackingDetailInputTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\SpdTrackingDetailInput;

/**
 * SpdTrackingDetailInputTest Class Doc Comment
 *
 * @category    Class
 * @description Contains input information to update Small Parcel Delivery (SPD) tracking information.
 * @package     SpApi
 */
class SpdTrackingDetailInputTest extends TestCase
{

    private SpdTrackingDetailInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SpdTrackingDetailInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SpdTrackingDetailInput"
     */
    public function testSpdTrackingDetailInput()
    {
        $this->assertInstanceOf(SpdTrackingDetailInput::class, $this->model);
    }

    /**
     * Test attribute "spd_tracking_items"
     */
    public function testPropertySpdTrackingItems()
    {
        $testValue = [];
        
        $this->model->setSpdTrackingItems($testValue);
        $this->assertEquals($testValue, $this->model->getSpdTrackingItems());
    }
}
