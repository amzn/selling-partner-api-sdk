<?php
/**
 * PointsTest
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
use OpenAPI\Client\Model\listings.items\Points;

/**
 * PointsTest Class Doc Comment
 *
 * @category    Class
 * @description The number of Amazon Points offered with the purchase of an item, and their monetary value. Note that the &#x60;Points&#x60; element is only returned in Japan (JP).
 * @package     OpenAPI\Client
 */
class PointsTest extends TestCase
{

    private Points $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Points();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Points"
     */
    public function testPoints()
    {
        $this->assertInstanceOf(Points::class, $this->model);
    }

    /**
     * Test attribute "points_number"
     */
    public function testPropertyPointsNumber()
    {
        $testValue = 123;
        
        $this->model->setPointsNumber($testValue);
        $this->assertEquals($testValue, $this->model->getPointsNumber());
    }
}
