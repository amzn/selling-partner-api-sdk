<?php
/**
 * GeocodeTest
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
use OpenAPI\Client\Model\shipping\Geocode;

/**
 * GeocodeTest Class Doc Comment
 *
 * @category    Class
 * @description Defines the latitude and longitude of the access point.
 * @package     OpenAPI\Client
 */
class GeocodeTest extends TestCase
{

    private Geocode $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Geocode();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Geocode"
     */
    public function testGeocode()
    {
        $this->assertInstanceOf(Geocode::class, $this->model);
    }

    /**
     * Test attribute "latitude"
     */
    public function testPropertyLatitude()
    {
        $testValue = 'test';
        
        $this->model->setLatitude($testValue);
        $this->assertEquals($testValue, $this->model->getLatitude());
    }

    /**
     * Test attribute "longitude"
     */
    public function testPropertyLongitude()
    {
        $testValue = 'test';
        
        $this->model->setLongitude($testValue);
        $this->assertEquals($testValue, $this->model->getLongitude());
    }
}
