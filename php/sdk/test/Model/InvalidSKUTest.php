<?php
/**
 * InvalidSKUTest
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
use SpApi\Model\fulfillment\inbound\v0\InvalidSKU;

/**
 * InvalidSKUTest Class Doc Comment
 *
 * @category    Class
 * @description Contains detail about an invalid SKU
 * @package     SpApi
 */
class InvalidSKUTest extends TestCase
{

    private InvalidSKU $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InvalidSKU();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InvalidSKU"
     */
    public function testInvalidSKU()
    {
        $this->assertInstanceOf(InvalidSKU::class, $this->model);
    }

    /**
     * Test attribute "seller_sku"
     */
    public function testPropertySellerSku()
    {
        $testValue = 'test';
        
        $this->model->setSellerSku($testValue);
        $this->assertEquals($testValue, $this->model->getSellerSku());
    }

    /**
     * Test attribute "error_reason"
     */
    public function testPropertyErrorReason()
    {
        $enumInstance = new \SpApi\Model\fulfillment\inbound\v0\ErrorReason();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setErrorReason($testValue);
        $this->assertEquals($testValue, $this->model->getErrorReason());
    }
}
