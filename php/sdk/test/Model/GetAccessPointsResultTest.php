<?php
/**
 * GetAccessPointsResultTest
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
use SpApi\Model\shipping\v2\GetAccessPointsResult;

/**
 * GetAccessPointsResultTest Class Doc Comment
 *
 * @category    Class
 * @description The payload for the GetAccessPoints API.
 * @package     SpApi
 */
class GetAccessPointsResultTest extends TestCase
{

    private GetAccessPointsResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetAccessPointsResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetAccessPointsResult"
     */
    public function testGetAccessPointsResult()
    {
        $this->assertInstanceOf(GetAccessPointsResult::class, $this->model);
    }

    /**
     * Test attribute "access_points_map"
     */
    public function testPropertyAccessPointsMap()
    {
        $testValue = array();
        
        $this->model->setAccessPointsMap($testValue);
        $this->assertEquals($testValue, $this->model->getAccessPointsMap());
    }
}
