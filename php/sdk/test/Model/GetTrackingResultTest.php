<?php
/**
 * GetTrackingResultTest
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
use SpApi\Model\shipping\v2\GetTrackingResult;

/**
 * GetTrackingResultTest Class Doc Comment
 *
 * @category    Class
 * @description The payload for the getTracking operation.
 * @package     SpApi
 */
class GetTrackingResultTest extends TestCase
{

    private GetTrackingResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetTrackingResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetTrackingResult"
     */
    public function testGetTrackingResult()
    {
        $this->assertInstanceOf(GetTrackingResult::class, $this->model);
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

    /**
     * Test attribute "alternate_leg_tracking_id"
     */
    public function testPropertyAlternateLegTrackingId()
    {
        $testValue = 'test';
        
        $this->model->setAlternateLegTrackingId($testValue);
        $this->assertEquals($testValue, $this->model->getAlternateLegTrackingId());
    }

    /**
     * Test attribute "event_history"
     */
    public function testPropertyEventHistory()
    {
        $testValue = [];
        
        $this->model->setEventHistory($testValue);
        $this->assertEquals($testValue, $this->model->getEventHistory());
    }

    /**
     * Test attribute "promised_delivery_date"
     */
    public function testPropertyPromisedDeliveryDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setPromisedDeliveryDate($testValue);
        $this->assertEquals($testValue, $this->model->getPromisedDeliveryDate());
    }

    /**
     * Test attribute "summary"
     */
    public function testPropertySummary()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\TrackingSummary();
        
        $this->model->setSummary($testValue);
        $this->assertEquals($testValue, $this->model->getSummary());
    }
}
