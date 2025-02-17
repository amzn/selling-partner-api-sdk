<?php
/**
 * ShipsFromTypeTest
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
use SpApi\Model\pricing\v0\ShipsFromType;

/**
 * ShipsFromTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The state and country from where the item is shipped.
 * @package     SpApi
 */
class ShipsFromTypeTest extends TestCase
{

    private ShipsFromType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipsFromType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipsFromType"
     */
    public function testShipsFromType()
    {
        $this->assertInstanceOf(ShipsFromType::class, $this->model);
    }

    /**
     * Test attribute "state"
     */
    public function testPropertyState()
    {
        $testValue = 'test';
        
        $this->model->setState($testValue);
        $this->assertEquals($testValue, $this->model->getState());
    }

    /**
     * Test attribute "country"
     */
    public function testPropertyCountry()
    {
        $testValue = 'test';
        
        $this->model->setCountry($testValue);
        $this->assertEquals($testValue, $this->model->getCountry());
    }
}
