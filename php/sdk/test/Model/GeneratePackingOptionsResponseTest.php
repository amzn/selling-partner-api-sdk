<?php
/**
 * GeneratePackingOptionsResponseTest
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
use OpenAPI\Client\Model\fulfillmentinbound\GeneratePackingOptionsResponse;

/**
 * GeneratePackingOptionsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;generatePackingOptions&#x60; response.
 * @package     OpenAPI\Client
 */
class GeneratePackingOptionsResponseTest extends TestCase
{

    private GeneratePackingOptionsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GeneratePackingOptionsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GeneratePackingOptionsResponse"
     */
    public function testGeneratePackingOptionsResponse()
    {
        $this->assertInstanceOf(GeneratePackingOptionsResponse::class, $this->model);
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
