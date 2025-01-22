<?php
/**
 * FeeComponentTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\finances\v0\FeeComponent;

/**
 * FeeComponentTest Class Doc Comment
 *
 * @category    Class
 * @description A fee associated with the event.
 * @package     OpenAPI\Client
 */
class FeeComponentTest extends TestCase
{

    private FeeComponent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeeComponent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeeComponent"
     */
    public function testFeeComponent()
    {
        $this->assertInstanceOf(FeeComponent::class, $this->model);
    }

    /**
     * Test attribute "fee_type"
     */
    public function testPropertyFeeType()
    {
        $testValue = 'test';
        
        $this->model->setFeeType($testValue);
        $this->assertEquals($testValue, $this->model->getFeeType());
    }

    /**
     * Test attribute "fee_amount"
     */
    public function testPropertyFeeAmount()
    {
        
        $testValue = new \OpenAPI\Client\Model\finances\v0\Currency();
        
        $this->model->setFeeAmount($testValue);
        $this->assertEquals($testValue, $this->model->getFeeAmount());
    }
}
