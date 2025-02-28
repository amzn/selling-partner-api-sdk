<?php
/**
 * TrackingDetailCodesTest
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
use SpApi\Model\shipping\v2\TrackingDetailCodes;

/**
 * TrackingDetailCodesTest Class Doc Comment
 *
 * @category    Class
 * @description Contains detail codes that provide additional details related to the forward and return leg of the shipment.
 * @package     SpApi
 */
class TrackingDetailCodesTest extends TestCase
{

    private TrackingDetailCodes $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TrackingDetailCodes();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TrackingDetailCodes"
     */
    public function testTrackingDetailCodes()
    {
        $this->assertInstanceOf(TrackingDetailCodes::class, $this->model);
    }

    /**
     * Test attribute "forward"
     */
    public function testPropertyForward()
    {
        $testValue = [];
        
        $this->model->setForward($testValue);
        $this->assertEquals($testValue, $this->model->getForward());
    }

    /**
     * Test attribute "returns"
     */
    public function testPropertyReturns()
    {
        $testValue = [];
        
        $this->model->setReturns($testValue);
        $this->assertEquals($testValue, $this->model->getReturns());
    }
}
