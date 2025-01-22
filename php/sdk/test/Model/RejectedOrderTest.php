<?php
/**
 * RejectedOrderTest
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
use OpenAPI\Client\Model\easyship\RejectedOrder;

/**
 * RejectedOrderTest Class Doc Comment
 *
 * @category    Class
 * @description A order which we couldn&#39;t schedule on your behalf. It contains its id, and information on the error.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\easyship\Error();
        
        $this->model->setError($testValue);
        $this->assertEquals($testValue, $this->model->getError());
    }
}
