<?php
/**
 * CarrierTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\Carrier;

/**
 * CarrierTest Class Doc Comment
 *
 * @category    Class
 * @description The carrier for the inbound shipment.
 * @package     SpApi
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
