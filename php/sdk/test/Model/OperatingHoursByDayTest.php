<?php
/**
 * OperatingHoursByDayTest
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
use SpApi\Model\supplySources\v2020_07_01\OperatingHoursByDay;

/**
 * OperatingHoursByDayTest Class Doc Comment
 *
 * @category    Class
 * @description The operating hours per day
 * @package     SpApi
 */
class OperatingHoursByDayTest extends TestCase
{

    private OperatingHoursByDay $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OperatingHoursByDay();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OperatingHoursByDay"
     */
    public function testOperatingHoursByDay()
    {
        $this->assertInstanceOf(OperatingHoursByDay::class, $this->model);
    }

    /**
     * Test attribute "monday"
     */
    public function testPropertyMonday()
    {
        $testValue = [];
        
        $this->model->setMonday($testValue);
        $this->assertEquals($testValue, $this->model->getMonday());
    }

    /**
     * Test attribute "tuesday"
     */
    public function testPropertyTuesday()
    {
        $testValue = [];
        
        $this->model->setTuesday($testValue);
        $this->assertEquals($testValue, $this->model->getTuesday());
    }

    /**
     * Test attribute "wednesday"
     */
    public function testPropertyWednesday()
    {
        $testValue = [];
        
        $this->model->setWednesday($testValue);
        $this->assertEquals($testValue, $this->model->getWednesday());
    }

    /**
     * Test attribute "thursday"
     */
    public function testPropertyThursday()
    {
        $testValue = [];
        
        $this->model->setThursday($testValue);
        $this->assertEquals($testValue, $this->model->getThursday());
    }

    /**
     * Test attribute "friday"
     */
    public function testPropertyFriday()
    {
        $testValue = [];
        
        $this->model->setFriday($testValue);
        $this->assertEquals($testValue, $this->model->getFriday());
    }

    /**
     * Test attribute "saturday"
     */
    public function testPropertySaturday()
    {
        $testValue = [];
        
        $this->model->setSaturday($testValue);
        $this->assertEquals($testValue, $this->model->getSaturday());
    }

    /**
     * Test attribute "sunday"
     */
    public function testPropertySunday()
    {
        $testValue = [];
        
        $this->model->setSunday($testValue);
        $this->assertEquals($testValue, $this->model->getSunday());
    }
}
