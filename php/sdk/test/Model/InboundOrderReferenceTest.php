<?php
/**
 * InboundOrderReferenceTest
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
use SpApi\Model\awd\v2024_05_09\InboundOrderReference;

/**
 * InboundOrderReferenceTest Class Doc Comment
 *
 * @category    Class
 * @description A response that contains the reference identifiers for the newly created or updated inbound order. Consists of an order ID and version.
 * @package     SpApi
 */
class InboundOrderReferenceTest extends TestCase
{

    private InboundOrderReference $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundOrderReference();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundOrderReference"
     */
    public function testInboundOrderReference()
    {
        $this->assertInstanceOf(InboundOrderReference::class, $this->model);
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
