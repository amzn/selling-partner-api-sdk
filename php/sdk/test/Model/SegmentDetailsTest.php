<?php
/**
 * SegmentDetailsTest
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
use OpenAPI\Client\Model\pricing\v2022_05_01\SegmentDetails;

/**
 * SegmentDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description The details about the segment. The FeaturedOfferExpectedPrice API uses only the sampleLocation portion as input.
 * @package     OpenAPI\Client
 */
class SegmentDetailsTest extends TestCase
{

    private SegmentDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SegmentDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SegmentDetails"
     */
    public function testSegmentDetails()
    {
        $this->assertInstanceOf(SegmentDetails::class, $this->model);
    }

    /**
     * Test attribute "glance_view_weight_percentage"
     */
    public function testPropertyGlanceViewWeightPercentage()
    {
        $testValue = 1;
        
        $this->model->setGlanceViewWeightPercentage($testValue);
        $this->assertEquals($testValue, $this->model->getGlanceViewWeightPercentage());
    }

    /**
     * Test attribute "sample_location"
     */
    public function testPropertySampleLocation()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v2022_05_01\SampleLocation();
        
        $this->model->setSampleLocation($testValue);
        $this->assertEquals($testValue, $this->model->getSampleLocation());
    }
}
