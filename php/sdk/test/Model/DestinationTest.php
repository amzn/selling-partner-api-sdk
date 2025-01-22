<?php
/**
 * DestinationTest
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
use OpenAPI\Client\Model\fulfillment\outbound\Destination;

/**
 * DestinationTest Class Doc Comment
 *
 * @category    Class
 * @description The destination for the delivery offer.
 * @package     OpenAPI\Client
 */
class DestinationTest extends TestCase
{

    private Destination $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Destination();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Destination"
     */
    public function testDestination()
    {
        $this->assertInstanceOf(Destination::class, $this->model);
    }

    /**
     * Test attribute "delivery_address"
     */
    public function testPropertyDeliveryAddress()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\outbound\VariablePrecisionAddress();
        
        $this->model->setDeliveryAddress($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryAddress());
    }

    /**
     * Test attribute "ip_address"
     */
    public function testPropertyIpAddress()
    {
        $testValue = 'test';
        
        $this->model->setIpAddress($testValue);
        $this->assertEquals($testValue, $this->model->getIpAddress());
    }
}
