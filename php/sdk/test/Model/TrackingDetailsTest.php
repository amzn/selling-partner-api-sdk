<?php
/**
 * TrackingDetailsTest
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
use OpenAPI\Client\Model\easyship\TrackingDetails;

/**
 * TrackingDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Representation of tracking metadata.
 * @package     OpenAPI\Client
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
