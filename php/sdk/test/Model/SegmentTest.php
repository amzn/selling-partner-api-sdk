<?php
/**
 * SegmentTest
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
use SpApi\Model\pricing\v2022_05_01\Segment;

/**
 * SegmentTest Class Doc Comment
 *
 * @category    Class
 * @description Input segment for featured offer expected price. The segment contains the location information for which featured offer expected price is requested.
 * @package     SpApi
 */
class SegmentTest extends TestCase
{

    private Segment $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Segment();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Segment"
     */
    public function testSegment()
    {
        $this->assertInstanceOf(Segment::class, $this->model);
    }

    /**
     * Test attribute "segment_details"
     */
    public function testPropertySegmentDetails()
    {
        
        $testValue = new \SpApi\Model\pricing\v2022_05_01\SegmentDetails();
        
        $this->model->setSegmentDetails($testValue);
        $this->assertEquals($testValue, $this->model->getSegmentDetails());
    }
}
