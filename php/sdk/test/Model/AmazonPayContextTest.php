<?php
/**
 * AmazonPayContextTest
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
use SpApi\Model\finances\v2024_06_19\AmazonPayContext;

/**
 * AmazonPayContextTest Class Doc Comment
 *
 * @category    Class
 * @description Additional information related to Amazon Pay.
 * @package     SpApi
 */
class AmazonPayContextTest extends TestCase
{

    private AmazonPayContext $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AmazonPayContext();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AmazonPayContext"
     */
    public function testAmazonPayContext()
    {
        $this->assertInstanceOf(AmazonPayContext::class, $this->model);
    }

    /**
     * Test attribute "store_name"
     */
    public function testPropertyStoreName()
    {
        $testValue = 'test';
        
        $this->model->setStoreName($testValue);
        $this->assertEquals($testValue, $this->model->getStoreName());
    }

    /**
     * Test attribute "order_type"
     */
    public function testPropertyOrderType()
    {
        $testValue = 'test';
        
        $this->model->setOrderType($testValue);
        $this->assertEquals($testValue, $this->model->getOrderType());
    }

    /**
     * Test attribute "channel"
     */
    public function testPropertyChannel()
    {
        $testValue = 'test';
        
        $this->model->setChannel($testValue);
        $this->assertEquals($testValue, $this->model->getChannel());
    }
}
