<?php
/**
 * SampleLocationTest
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
use OpenAPI\Client\Model\pricing\v2022_05_01\SampleLocation;

/**
 * SampleLocationTest Class Doc Comment
 *
 * @category    Class
 * @description Information about a location. It uses a postal code to identify the location.
 * @package     OpenAPI\Client
 */
class SampleLocationTest extends TestCase
{

    private SampleLocation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SampleLocation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SampleLocation"
     */
    public function testSampleLocation()
    {
        $this->assertInstanceOf(SampleLocation::class, $this->model);
    }

    /**
     * Test attribute "postal_code"
     */
    public function testPropertyPostalCode()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v2022_05_01\PostalCode();
        
        $this->model->setPostalCode($testValue);
        $this->assertEquals($testValue, $this->model->getPostalCode());
    }
}
