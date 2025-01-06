<?php
/**
 * DeliveryPolicyTest
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
use OpenAPI\Client\Model\fulfillmentOutbound\DeliveryPolicy;

/**
 * DeliveryPolicyTest Class Doc Comment
 *
 * @category    Class
 * @description The policy for a delivery offering.
 * @package     OpenAPI\Client
 */
class DeliveryPolicyTest extends TestCase
{

    private DeliveryPolicy $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DeliveryPolicy();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DeliveryPolicy"
     */
    public function testDeliveryPolicy()
    {
        $this->assertInstanceOf(DeliveryPolicy::class, $this->model);
    }

    /**
     * Test attribute "message"
     */
    public function testPropertyMessage()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentOutbound\DeliveryMessage();
        
        $this->model->setMessage($testValue);
        $this->assertEquals($testValue, $this->model->getMessage());
    }
}
