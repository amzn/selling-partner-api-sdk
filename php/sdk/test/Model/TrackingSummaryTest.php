<?php
/**
 * TrackingSummaryTest
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
use OpenAPI\Client\Model\shipping\TrackingSummary;

/**
 * TrackingSummaryTest Class Doc Comment
 *
 * @category    Class
 * @description A package status summary.
 * @package     OpenAPI\Client
 */
class TrackingSummaryTest extends TestCase
{

    private TrackingSummary $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TrackingSummary();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TrackingSummary"
     */
    public function testTrackingSummary()
    {
        $this->assertInstanceOf(TrackingSummary::class, $this->model);
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $enumInstance = new \OpenAPI\Client\Model\shipping\Status();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }
}
