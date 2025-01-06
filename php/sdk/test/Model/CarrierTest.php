<?php
/**
 * CarrierTest
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
use OpenAPI\Client\Model\fulfillmentInbound\Carrier;

/**
 * CarrierTest Class Doc Comment
 *
 * @category    Class
 * @description The carrier for the inbound shipment.
 * @package     OpenAPI\Client
 */
class CarrierTest extends TestCase
{

    private Carrier $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Carrier();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Carrier"
     */
    public function testCarrier()
    {
        $this->assertInstanceOf(Carrier::class, $this->model);
    }

    /**
     * Test attribute "alpha_code"
     */
    public function testPropertyAlphaCode()
    {
        $testValue = 'test';
        
        $this->model->setAlphaCode($testValue);
        $this->assertEquals($testValue, $this->model->getAlphaCode());
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $testValue = 'test';
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }
}
