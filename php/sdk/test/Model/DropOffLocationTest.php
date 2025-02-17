<?php
/**
 * DropOffLocationTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\DropOffLocation;

/**
 * DropOffLocationTest Class Doc Comment
 *
 * @category    Class
 * @description The preferred location to leave packages at the destination address.
 * @package     SpApi
 */
class DropOffLocationTest extends TestCase
{

    private DropOffLocation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DropOffLocation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DropOffLocation"
     */
    public function testDropOffLocation()
    {
        $this->assertInstanceOf(DropOffLocation::class, $this->model);
    }

    /**
     * Test attribute "type"
     */
    public function testPropertyType()
    {
        $enumInstance = new DropOffLocation();
        $allowedValues = $enumInstance->getTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setType($testValue);
        $this->assertEquals($testValue, $this->model->getType());
    }

    /**
     * Test attribute "attributes"
     */
    public function testPropertyAttributes()
    {
        $testValue = array();
        
        $this->model->setAttributes($testValue);
        $this->assertEquals($testValue, $this->model->getAttributes());
    }
}
