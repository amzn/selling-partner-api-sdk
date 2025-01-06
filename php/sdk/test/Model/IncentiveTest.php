<?php
/**
 * IncentiveTest
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
use OpenAPI\Client\Model\fulfillmentInbound\Incentive;

/**
 * IncentiveTest Class Doc Comment
 *
 * @category    Class
 * @description Contains details about cost related modifications to the placement cost.
 * @package     OpenAPI\Client
 */
class IncentiveTest extends TestCase
{

    private Incentive $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Incentive();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Incentive"
     */
    public function testIncentive()
    {
        $this->assertInstanceOf(Incentive::class, $this->model);
    }

    /**
     * Test attribute "description"
     */
    public function testPropertyDescription()
    {
        $testValue = 'test';
        
        $this->model->setDescription($testValue);
        $this->assertEquals($testValue, $this->model->getDescription());
    }

    /**
     * Test attribute "target"
     */
    public function testPropertyTarget()
    {
        $testValue = 'test';
        
        $this->model->setTarget($testValue);
        $this->assertEquals($testValue, $this->model->getTarget());
    }

    /**
     * Test attribute "type"
     */
    public function testPropertyType()
    {
        $testValue = 'test';
        
        $this->model->setType($testValue);
        $this->assertEquals($testValue, $this->model->getType());
    }

    /**
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentInbound\Currency();
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }
}
