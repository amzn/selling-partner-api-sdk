<?php
/**
 * AccessPointTest
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
use SpApi\Model\shipping\v2\AccessPoint;

/**
 * AccessPointTest Class Doc Comment
 *
 * @category    Class
 * @description Access point details
 * @package     SpApi
 */
class AccessPointTest extends TestCase
{

    private AccessPoint $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AccessPoint();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AccessPoint"
     */
    public function testAccessPoint()
    {
        $this->assertInstanceOf(AccessPoint::class, $this->model);
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

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $testValue = 'test';
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }

    /**
     * Test attribute "timezone"
     */
    public function testPropertyTimezone()
    {
        $testValue = 'test';
        
        $this->model->setTimezone($testValue);
        $this->assertEquals($testValue, $this->model->getTimezone());
    }

    /**
     * Test attribute "type"
     */
    public function testPropertyType()
    {
        $enumInstance = new \SpApi\Model\shipping\v2\AccessPointType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setType($testValue);
        $this->assertEquals($testValue, $this->model->getType());
    }

    /**
     * Test attribute "accessibility_attributes"
     */
    public function testPropertyAccessibilityAttributes()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\AccessibilityAttributes();
        
        $this->model->setAccessibilityAttributes($testValue);
        $this->assertEquals($testValue, $this->model->getAccessibilityAttributes());
    }

    /**
     * Test attribute "address"
     */
    public function testPropertyAddress()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\Address();
        
        $this->model->setAddress($testValue);
        $this->assertEquals($testValue, $this->model->getAddress());
    }

    /**
     * Test attribute "exception_operating_hours"
     */
    public function testPropertyExceptionOperatingHours()
    {
        $testValue = [];
        
        $this->model->setExceptionOperatingHours($testValue);
        $this->assertEquals($testValue, $this->model->getExceptionOperatingHours());
    }

    /**
     * Test attribute "assistance_type"
     */
    public function testPropertyAssistanceType()
    {
        $enumInstance = new AccessPoint();
        $allowedValues = $enumInstance->getAssistanceTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setAssistanceType($testValue);
        $this->assertEquals($testValue, $this->model->getAssistanceType());
    }

    /**
     * Test attribute "score"
     */
    public function testPropertyScore()
    {
        $testValue = 'test';
        
        $this->model->setScore($testValue);
        $this->assertEquals($testValue, $this->model->getScore());
    }

    /**
     * Test attribute "standard_operating_hours"
     */
    public function testPropertyStandardOperatingHours()
    {
        $testValue = array();
        
        $this->model->setStandardOperatingHours($testValue);
        $this->assertEquals($testValue, $this->model->getStandardOperatingHours());
    }
}
