<?php
/**
 * UpdateShipmentStatusErrorResponseTest
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
use OpenAPI\Client\Model\orders\v0\UpdateShipmentStatusErrorResponse;

/**
 * UpdateShipmentStatusErrorResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The error response schema for the &#x60;UpdateShipmentStatus&#x60; operation.
 * @package     OpenAPI\Client
 */
class UpdateShipmentStatusErrorResponseTest extends TestCase
{

    private UpdateShipmentStatusErrorResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateShipmentStatusErrorResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateShipmentStatusErrorResponse"
     */
    public function testUpdateShipmentStatusErrorResponse()
    {
        $this->assertInstanceOf(UpdateShipmentStatusErrorResponse::class, $this->model);
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
