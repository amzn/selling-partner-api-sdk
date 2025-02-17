<?php
/**
 * AccessibilityAttributesTest
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
use SpApi\Model\shipping\v2\AccessibilityAttributes;

/**
 * AccessibilityAttributesTest Class Doc Comment
 *
 * @category    Class
 * @description Defines the accessibility details of the access point.
 * @package     SpApi
 */
class AccessibilityAttributesTest extends TestCase
{

    private AccessibilityAttributes $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AccessibilityAttributes();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AccessibilityAttributes"
     */
    public function testAccessibilityAttributes()
    {
        $this->assertInstanceOf(AccessibilityAttributes::class, $this->model);
    }

    /**
     * Test attribute "distance"
     */
    public function testPropertyDistance()
    {
        $testValue = 'test';
        
        $this->model->setDistance($testValue);
        $this->assertEquals($testValue, $this->model->getDistance());
    }

    /**
     * Test attribute "drive_time"
     */
    public function testPropertyDriveTime()
    {
        $testValue = 123;
        
        $this->model->setDriveTime($testValue);
        $this->assertEquals($testValue, $this->model->getDriveTime());
    }
}
