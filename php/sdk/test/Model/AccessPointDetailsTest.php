<?php
/**
 * AccessPointDetailsTest
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
use SpApi\Model\shipping\v2\AccessPointDetails;

/**
 * AccessPointDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description AccessPointDetails object
 * @package     SpApi
 */
class AccessPointDetailsTest extends TestCase
{

    private AccessPointDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AccessPointDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AccessPointDetails"
     */
    public function testAccessPointDetails()
    {
        $this->assertInstanceOf(AccessPointDetails::class, $this->model);
    }

    /**
     * Test attribute "access_point_id"
     */
    public function testPropertyAccessPointId()
    {
        $testValue = 'test';
        
        $this->model->setAccessPointId($testValue);
        $this->assertEquals($testValue, $this->model->getAccessPointId());
    }
}
