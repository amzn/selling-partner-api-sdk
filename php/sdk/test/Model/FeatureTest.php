<?php
/**
 * FeatureTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillment\outbound\Feature;

/**
 * FeatureTest Class Doc Comment
 *
 * @category    Class
 * @description A Multi-Channel Fulfillment feature.
 * @package     OpenAPI\Client
 */
class FeatureTest extends TestCase
{

    private Feature $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Feature();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Feature"
     */
    public function testFeature()
    {
        $this->assertInstanceOf(Feature::class, $this->model);
    }

    /**
     * Test attribute "feature_name"
     */
    public function testPropertyFeatureName()
    {
        $testValue = 'test';
        
        $this->model->setFeatureName($testValue);
        $this->assertEquals($testValue, $this->model->getFeatureName());
    }

    /**
     * Test attribute "feature_description"
     */
    public function testPropertyFeatureDescription()
    {
        $testValue = 'test';
        
        $this->model->setFeatureDescription($testValue);
        $this->assertEquals($testValue, $this->model->getFeatureDescription());
    }

    /**
     * Test attribute "seller_eligible"
     */
    public function testPropertySellerEligible()
    {
        $testValue = true;
        
        $this->model->setSellerEligible($testValue);
        $this->assertEquals($testValue, $this->model->getSellerEligible());
    }
}
