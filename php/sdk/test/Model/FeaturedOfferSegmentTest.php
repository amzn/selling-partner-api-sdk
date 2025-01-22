<?php
/**
 * FeaturedOfferSegmentTest
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
use OpenAPI\Client\Model\pricing\v2022_05_01\FeaturedOfferSegment;

/**
 * FeaturedOfferSegmentTest Class Doc Comment
 *
 * @category    Class
 * @description Describes the segment in which the offer is featured.
 * @package     OpenAPI\Client
 */
class FeaturedOfferSegmentTest extends TestCase
{

    private FeaturedOfferSegment $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeaturedOfferSegment();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeaturedOfferSegment"
     */
    public function testFeaturedOfferSegment()
    {
        $this->assertInstanceOf(FeaturedOfferSegment::class, $this->model);
    }

    /**
     * Test attribute "customer_membership"
     */
    public function testPropertyCustomerMembership()
    {
        $enumInstance = new FeaturedOfferSegment();
        $allowedValues = $enumInstance->getCustomerMembershipAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setCustomerMembership($testValue);
        $this->assertEquals($testValue, $this->model->getCustomerMembership());
    }

    /**
     * Test attribute "segment_details"
     */
    public function testPropertySegmentDetails()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v2022_05_01\SegmentDetails();
        
        $this->model->setSegmentDetails($testValue);
        $this->assertEquals($testValue, $this->model->getSegmentDetails());
    }
}
