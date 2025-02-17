<?php
/**
 * AvailableValueAddedServiceGroupTest
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
use SpApi\Model\shipping\v2\AvailableValueAddedServiceGroup;

/**
 * AvailableValueAddedServiceGroupTest Class Doc Comment
 *
 * @category    Class
 * @description The value-added services available for purchase with a shipping service offering.
 * @package     SpApi
 */
class AvailableValueAddedServiceGroupTest extends TestCase
{

    private AvailableValueAddedServiceGroup $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AvailableValueAddedServiceGroup();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AvailableValueAddedServiceGroup"
     */
    public function testAvailableValueAddedServiceGroup()
    {
        $this->assertInstanceOf(AvailableValueAddedServiceGroup::class, $this->model);
    }

    /**
     * Test attribute "group_id"
     */
    public function testPropertyGroupId()
    {
        $testValue = 'test';
        
        $this->model->setGroupId($testValue);
        $this->assertEquals($testValue, $this->model->getGroupId());
    }

    /**
     * Test attribute "group_description"
     */
    public function testPropertyGroupDescription()
    {
        $testValue = 'test';
        
        $this->model->setGroupDescription($testValue);
        $this->assertEquals($testValue, $this->model->getGroupDescription());
    }

    /**
     * Test attribute "is_required"
     */
    public function testPropertyIsRequired()
    {
        $testValue = true;
        
        $this->model->setIsRequired($testValue);
        $this->assertEquals($testValue, $this->model->getIsRequired());
    }

    /**
     * Test attribute "value_added_services"
     */
    public function testPropertyValueAddedServices()
    {
        $testValue = [];
        
        $this->model->setValueAddedServices($testValue);
        $this->assertEquals($testValue, $this->model->getValueAddedServices());
    }
}
