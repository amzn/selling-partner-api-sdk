<?php
/**
 * ConfirmPlacementOptionResponseTest
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
use OpenAPI\Client\Model\fulfillmentinbound\ConfirmPlacementOptionResponse;

/**
 * ConfirmPlacementOptionResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;confirmPlacementOption&#x60; response.
 * @package     OpenAPI\Client
 */
class ConfirmPlacementOptionResponseTest extends TestCase
{

    private ConfirmPlacementOptionResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ConfirmPlacementOptionResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ConfirmPlacementOptionResponse"
     */
    public function testConfirmPlacementOptionResponse()
    {
        $this->assertInstanceOf(ConfirmPlacementOptionResponse::class, $this->model);
    }

    /**
     * Test attribute "operation_id"
     */
    public function testPropertyOperationId()
    {
        $testValue = 'test';
        
        $this->model->setOperationId($testValue);
        $this->assertEquals($testValue, $this->model->getOperationId());
    }
}
