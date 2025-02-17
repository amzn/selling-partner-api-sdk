<?php
/**
 * AmazonOrderDetailsTest
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
use SpApi\Model\shipping\v2\AmazonOrderDetails;

/**
 * AmazonOrderDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Amazon order information. This is required if the shipment source channel is Amazon.
 * @package     SpApi
 */
class AmazonOrderDetailsTest extends TestCase
{

    private AmazonOrderDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AmazonOrderDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AmazonOrderDetails"
     */
    public function testAmazonOrderDetails()
    {
        $this->assertInstanceOf(AmazonOrderDetails::class, $this->model);
    }

    /**
     * Test attribute "order_id"
     */
    public function testPropertyOrderId()
    {
        $testValue = 'test';
        
        $this->model->setOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getOrderId());
    }
}
