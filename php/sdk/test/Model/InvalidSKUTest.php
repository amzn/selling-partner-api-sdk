<?php
/**
 * InvalidSKUTest
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
use OpenAPI\Client\Model\fulfillmentInboundV0\InvalidSKU;

/**
 * InvalidSKUTest Class Doc Comment
 *
 * @category    Class
 * @description Contains detail about an invalid SKU
 * @package     OpenAPI\Client
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
        $enumInstance = new \OpenAPI\Client\Model\fulfillmentInboundV0\ErrorReason();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setErrorReason($testValue);
        $this->assertEquals($testValue, $this->model->getErrorReason());
    }
}
