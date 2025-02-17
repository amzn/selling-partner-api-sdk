<?php
/**
 * TrackingDetailsTest
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
use SpApi\Model\easyship\v2022_03_23\TrackingDetails;

/**
 * TrackingDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Representation of tracking metadata.
 * @package     SpApi
 */
class TrackingDetailsTest extends TestCase
{

    private TrackingDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TrackingDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TrackingDetails"
     */
    public function testTrackingDetails()
    {
        $this->assertInstanceOf(TrackingDetails::class, $this->model);
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
