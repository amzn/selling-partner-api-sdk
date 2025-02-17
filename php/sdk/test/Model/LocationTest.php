<?php
/**
 * LocationTest
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
use SpApi\Model\shipping\v2\Location;

/**
 * LocationTest Class Doc Comment
 *
 * @category    Class
 * @description The location where the person, business or institution is located.
 * @package     SpApi
 */
class LocationTest extends TestCase
{

    private Location $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Location();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Location"
     */
    public function testLocation()
    {
        $this->assertInstanceOf(Location::class, $this->model);
    }

    /**
     * Test attribute "state_or_region"
     */
    public function testPropertyStateOrRegion()
    {
        $testValue = 'test';
        
        $this->model->setStateOrRegion($testValue);
        $this->assertEquals($testValue, $this->model->getStateOrRegion());
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
     * Test attribute "country_code"
     */
    public function testPropertyCountryCode()
    {
        $testValue = 'test';
        
        $this->model->setCountryCode($testValue);
        $this->assertEquals($testValue, $this->model->getCountryCode());
    }

    /**
     * Test attribute "postal_code"
     */
    public function testPropertyPostalCode()
    {
        $testValue = 'test';
        
        $this->model->setPostalCode($testValue);
        $this->assertEquals($testValue, $this->model->getPostalCode());
    }
}
