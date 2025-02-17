<?php
/**
 * RejectedOrderTest
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
use SpApi\Model\easyship\v2022_03_23\RejectedOrder;

/**
 * RejectedOrderTest Class Doc Comment
 *
 * @category    Class
 * @description A order which we couldn&#39;t schedule on your behalf. It contains its id, and information on the error.
 * @package     SpApi
 */
class RejectedOrderTest extends TestCase
{

    private RejectedOrder $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RejectedOrder();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RejectedOrder"
     */
    public function testRejectedOrder()
    {
        $this->assertInstanceOf(RejectedOrder::class, $this->model);
    }

    /**
     * Test attribute "amazon_order_id"
     */
    public function testPropertyAmazonOrderId()
    {
        $testValue = 'test';
        
        $this->model->setAmazonOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonOrderId());
    }

    /**
     * Test attribute "error"
     */
    public function testPropertyError()
    {
        
        $testValue = new \SpApi\Model\easyship\v2022_03_23\Error();
        
        $this->model->setError($testValue);
        $this->assertEquals($testValue, $this->model->getError());
    }
}
