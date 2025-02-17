<?php
/**
 * TrackingAddressTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\TrackingAddress;

/**
 * TrackingAddressTest Class Doc Comment
 *
 * @category    Class
 * @description Address information for tracking the package.
 * @package     SpApi
 */
class TrackingAddressTest extends TestCase
{

    private TrackingAddress $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TrackingAddress();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TrackingAddress"
     */
    public function testTrackingAddress()
    {
        $this->assertInstanceOf(TrackingAddress::class, $this->model);
    }

    /**
     * Test attribute "city"
     */
    public function testPropertyCity()
    {
        $testValue = 'test';
        
        $this->model->setCity($testValue);
        $this->assertEquals($testValue, $this->model->getCity());
    }

    /**
     * Test attribute "state"
     */
    public function testPropertyState()
    {
        $testValue = 'test';
        
        $this->model->setState($testValue);
        $this->assertEquals($testValue, $this->model->getState());
    }

    /**
     * Test attribute "country"
     */
    public function testPropertyCountry()
    {
        $testValue = 'test';
        
        $this->model->setCountry($testValue);
        $this->assertEquals($testValue, $this->model->getCountry());
    }
}
