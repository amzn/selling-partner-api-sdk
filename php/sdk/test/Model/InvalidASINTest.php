<?php
/**
 * InvalidASINTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\InvalidASIN;

/**
 * InvalidASINTest Class Doc Comment
 *
 * @category    Class
 * @description Contains details about an invalid ASIN
 * @package     OpenAPI\Client
 */
class InvalidASINTest extends TestCase
{

    private InvalidASIN $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InvalidASIN();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InvalidASIN"
     */
    public function testInvalidASIN()
    {
        $this->assertInstanceOf(InvalidASIN::class, $this->model);
    }

    /**
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
    }

    /**
     * Test attribute "error_reason"
     */
    public function testPropertyErrorReason()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\inbound\v0\ErrorReason();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setErrorReason($testValue);
        $this->assertEquals($testValue, $this->model->getErrorReason());
    }
}
