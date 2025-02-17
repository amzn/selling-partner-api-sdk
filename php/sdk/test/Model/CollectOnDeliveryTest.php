<?php
/**
 * CollectOnDeliveryTest
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
use SpApi\Model\shipping\v2\CollectOnDelivery;

/**
 * CollectOnDeliveryTest Class Doc Comment
 *
 * @category    Class
 * @description The amount to collect on delivery.
 * @package     SpApi
 */
class CollectOnDeliveryTest extends TestCase
{

    private CollectOnDelivery $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CollectOnDelivery();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CollectOnDelivery"
     */
    public function testCollectOnDelivery()
    {
        $this->assertInstanceOf(CollectOnDelivery::class, $this->model);
    }

    /**
     * Test attribute "amount"
     */
    public function testPropertyAmount()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\Currency();
        
        $this->model->setAmount($testValue);
        $this->assertEquals($testValue, $this->model->getAmount());
    }
}
