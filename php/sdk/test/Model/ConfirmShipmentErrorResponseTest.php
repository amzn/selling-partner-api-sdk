<?php
/**
 * ConfirmShipmentErrorResponseTest
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
use OpenAPI\Client\Model\orders\ConfirmShipmentErrorResponse;

/**
 * ConfirmShipmentErrorResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The error response schema for the &#x60;confirmShipment&#x60; operation.
 * @package     OpenAPI\Client
 */
class ConfirmShipmentErrorResponseTest extends TestCase
{

    private ConfirmShipmentErrorResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ConfirmShipmentErrorResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ConfirmShipmentErrorResponse"
     */
    public function testConfirmShipmentErrorResponse()
    {
        $this->assertInstanceOf(ConfirmShipmentErrorResponse::class, $this->model);
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        $testValue = [];
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
