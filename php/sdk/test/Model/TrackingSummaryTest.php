<?php
/**
 * TrackingSummaryTest
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
use SpApi\Model\shipping\v2\TrackingSummary;

/**
 * TrackingSummaryTest Class Doc Comment
 *
 * @category    Class
 * @description A package status summary.
 * @package     SpApi
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
        $enumInstance = new \SpApi\Model\shipping\v2\Status();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }

    /**
     * Test attribute "tracking_detail_codes"
     */
    public function testPropertyTrackingDetailCodes()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\TrackingDetailCodes();
        
        $this->model->setTrackingDetailCodes($testValue);
        $this->assertEquals($testValue, $this->model->getTrackingDetailCodes());
    }
}
