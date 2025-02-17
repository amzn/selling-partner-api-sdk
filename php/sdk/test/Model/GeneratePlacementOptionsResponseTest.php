<?php
/**
 * GeneratePlacementOptionsResponseTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\GeneratePlacementOptionsResponse;

/**
 * GeneratePlacementOptionsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;generatePlacementOptions&#x60; response.
 * @package     SpApi
 */
class GeneratePlacementOptionsResponseTest extends TestCase
{

    private GeneratePlacementOptionsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GeneratePlacementOptionsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GeneratePlacementOptionsResponse"
     */
    public function testGeneratePlacementOptionsResponse()
    {
        $this->assertInstanceOf(GeneratePlacementOptionsResponse::class, $this->model);
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
