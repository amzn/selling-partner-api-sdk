<?php
/**
 * GetFeaturesResultTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\GetFeaturesResult;

/**
 * GetFeaturesResultTest Class Doc Comment
 *
 * @category    Class
 * @description The payload for the &#x60;getFeatures&#x60; operation.
 * @package     SpApi
 */
class GetFeaturesResultTest extends TestCase
{

    private GetFeaturesResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetFeaturesResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetFeaturesResult"
     */
    public function testGetFeaturesResult()
    {
        $this->assertInstanceOf(GetFeaturesResult::class, $this->model);
    }

    /**
     * Test attribute "features"
     */
    public function testPropertyFeatures()
    {
        $testValue = [];
        
        $this->model->setFeatures($testValue);
        $this->assertEquals($testValue, $this->model->getFeatures());
    }
}
